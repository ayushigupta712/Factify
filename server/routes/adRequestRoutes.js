import express from "express"; // Use import instead of require
import multer from "multer"; // Use import instead of require
import AdRequest from "../models/AdRequest.js"; // Ensure the file extension is .js

const router = express.Router();

// Configure multer for file handling (image/video)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/ads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// ✅ Add new ad request
router.post("/", upload.single("adImage"), async (req, res) => {
  try {
    const { businessName, adLink, adSize, adDuration, totalCost } = req.body;
    const adImage = req.file ? req.file.path : null;

    if (!adImage) {
      return res.status(400).json({ error: "Ad image is required" });
    }

    const newAd = new AdRequest({
      businessName,
      adLink,
      adSize,
      adDuration,
      totalCost,
      adImage,
    });

    await newAd.save();
    res
      .status(201)
      .json({ message: "Ad request submitted successfully", ad: newAd });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit ad request" });
  }
});

// ✅ Get all ad requests
router.get("/", async (req, res) => {
  try {
    const ads = await AdRequest.find().sort({ createdAt: -1 });
    res.status(200).json(ads);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch ad requests" });
  }
});

// ✅ Delete ad request by ID
router.delete("/:id", async (req, res) => {
  try {
    await AdRequest.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Ad request deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete ad request" });
  }
});

export default router; // Use export default instead of module.exports
