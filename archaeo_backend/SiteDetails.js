const mongoose = require("mongoose");

const SiteDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    images: [String],
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
  },
  {
    collection: "SiteDetails",
  }
);
const SiteDetails = mongoose.model("SiteDetails", SiteDetailsSchema);

module.exports = SiteDetails;