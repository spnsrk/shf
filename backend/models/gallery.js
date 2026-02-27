const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  eventType: {
    type: String,
    required: true,
  },

  // S3 object key (preferred). Allows us to generate the correct URL per environment
  // without hardcoding localhost/prod domains into MongoDB.
  imageKey: {
    type: String,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("gallery", gallerySchema);
