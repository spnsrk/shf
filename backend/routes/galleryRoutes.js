const express = require("express");
const upload = require("../middleware/multerS3Config.js");
const {
  getGalleryImageUrl,
  uploadImageUrlToDB,
  getGalleryObject,
} = require("../controllers/galleryController.js");

const router = express.Router();
router.post("/gallery", upload.single("image"), uploadImageUrlToDB);
router.get("/gallery", getGalleryImageUrl);
router.get("/gallery/object/:key", getGalleryObject);

module.exports = router;