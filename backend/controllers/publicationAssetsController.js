const { GetObjectCommand } = require("@aws-sdk/client-s3");
const s3 = require("../config/awsConfig");

const ASSET_MAP = {
  yoga25: {
    key: "publications/Yoga25.jpeg",
    filename: "Yoga25.jpeg",
    contentType: "image/jpeg",
  },
  yoga24: {
    key: "publications/Yoga24.jpeg",
    filename: "Yoga24.jpeg",
    contentType: "image/jpeg",
  },
};

const getPublicationAsset = async (req, res) => {
  try {
    const name = String(req.params.name || "").toLowerCase();
    const asset = ASSET_MAP[name];

    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: asset.key,
    });

    const response = await s3.send(command);

    res.setHeader("Content-Type", response.ContentType || asset.contentType);
    res.setHeader("Content-Disposition", `inline; filename="${asset.filename}"`);
    res.setHeader("Cache-Control", "public, max-age=3600");

    return response.Body.pipe(res);
  } catch (error) {
    console.error("Error fetching publication asset:", error);
    return res.status(500).send("Failed to fetch asset.");
  }
};

module.exports = { getPublicationAsset };

