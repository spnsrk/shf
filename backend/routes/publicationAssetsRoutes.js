const express = require("express");
const {
  getPublicationAsset,
} = require("../controllers/publicationAssetsController");

const router = express.Router();

router.get("/:name", getPublicationAsset);

module.exports = router;

