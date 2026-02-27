const gallery = require("../models/gallery.js");
const { GetObjectCommand } = require("@aws-sdk/client-s3");
const s3 = require("../config/awsConfig");

const buildGalleryObjectUrl = (req, key) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  return `${baseUrl}/api/gallery/object/${encodeURIComponent(key)}`;
};

const uploadImageUrlToDB = async (req, res, next) => {
  const { eventType } = req.body;

  try {
    const key = req.file?.key;
    if (!key) {
      return res.status(400).json({ message: "Missing uploaded file key" });
    }

    const data = {
      eventType,
      imageKey: key,
      // Keep something in DB (required). Actual URL is generated per-request.
      imageUrl: key,
    };

    const imageData = new gallery(data);
    await imageData.save();

    res.status(201).json({
      message: "image saved to S3 and URL saved to DB",
      data: imageData,
    });
  } catch (error) {
    next(error);
  }
};

const getGalleryObject = async (req, res) => {
  try {
    const key = String(req.params.key || "");

    // Basic hardening: keys are generated as "<timestamp>-<originalname>".
    // Don't allow nested paths.
    if (!key || key.includes("/") || key.includes("..")) {
      return res.status(400).json({ message: "Invalid key" });
    }

    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    });

    const response = await s3.send(command);

    res.setHeader("Content-Type", response.ContentType || "image/jpeg");
    res.setHeader("Content-Disposition", "inline");
    res.setHeader("Cache-Control", "public, max-age=3600");

    return response.Body.pipe(res);
  } catch (error) {
    console.error("Error fetching gallery object:", error);
    return res.status(500).send("Failed to fetch image.");
  }
};

const getGalleryImageUrl = async (req, res, next) => {
  try {
    const gallerydata = await gallery.find().sort({ _id: -1 });

    const mapped = gallerydata.map((doc) => {
      const obj = doc.toObject();

      if (obj.imageKey) {
        obj.imageUrl = buildGalleryObjectUrl(req, obj.imageKey);
        return obj;
      }

      // Back-compat: if older records stored a localhost URL, rewrite to current host.
      // Example: http://localhost:5000/api/gallery/object/<key>
      if (typeof obj.imageUrl === "string" && obj.imageUrl.includes("/api/gallery/object/")) {
        const key = obj.imageUrl.split("/api/gallery/object/").pop();
        if (key && !key.includes("/") && !key.includes("..")) {
          obj.imageUrl = buildGalleryObjectUrl(req, key);
        }
      }

      return obj;
    });

    res.json(mapped);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadImageUrlToDB,
  getGalleryImageUrl,
  getGalleryObject,
};
