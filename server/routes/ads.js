import express from "express";
import Ad from "../models/Ad.js"; // Import Ad model

const router = express.Router();

//  Fetch All Ads Route
router.get("/", async (req, res) => {
  try {
    console.log("Fetching ads from the database...");

    const ads = await Ad.find();
    console.log("Ads fetched successfully:", ads);

    res.json({ success: true, ads });
  } catch (error) {
    console.error("Error fetching ads:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

//  Add New Ad Route
router.post("/add", async (req, res) => {
  try {
    const { image, redirectLink, companyName, adDuration } = req.body;

    console.log("New ad request received:", {
      image,
      redirectLink,
      companyName,
      adDuration,
    });

    // Check if all fields are provided
    if (!image || !redirectLink || !companyName || !adDuration) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // ✅ Create and Save New Ad
    const newAd = new Ad({ image, redirectLink, companyName, adDuration });
    await newAd.save();

    console.log("Ad added successfully:", newAd);

    res.status(201).json({
      success: true,
      message: "Ad added successfully!",
      ad: newAd,
    });
  } catch (error) {
    console.error("Error adding ad:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Delete Ad Route
router.delete("/:id", async (req, res) => {
  try {
    const adId = req.params.id;
    console.log("Delete request received for adId:", adId);

    const deletedAd = await Ad.findByIdAndDelete(adId);

    if (!deletedAd) {
      return res.status(404).json({ success: false, message: "Ad not found" });
    }

    console.log("Ad deleted successfully:", deletedAd);
    res.json({ success: true, message: "Ad deleted successfully!" });
  } catch (error) {
    console.error("Error deleting ad:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
