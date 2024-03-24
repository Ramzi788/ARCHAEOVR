const mongoose = require("mongoose");
const SiteDetails = require("./SiteDetails");
require("dotenv").config({ path: "./path.env" });
const express = require("express");
const app = express();

app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri)
  .then(async () => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));
app.get("/api/siteDetails/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const siteDetails = await SiteDetails.findOne({
      name: decodeURIComponent(name),
    });
    if (!siteDetails) {
      return res.status(404).send({ message: "Site not found" });
    }
    res.json(siteDetails);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});

app.listen(5002, () => {
  console.log("Server is listening on port 5002");
});

process.on("SIGINT", () => {
  mongoose.disconnect().then(() => {
    console.log("MongoDB connection closed.");
    process.exit(0);
  });
});
