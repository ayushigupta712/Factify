import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import NewsRequest from "../models/NewsRequest.js"; // Import MongoDB model

const router = express.Router();

// Setup for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer setup for handling image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save images in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// POST request to submit a news request
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { publisherName, reporterName, category, headline, remarks } =
      req.body;
    const dateTime = new Date().toISOString(); // Current timestamp
    const imageLink = req.file ? `/uploads/${req.file.filename}` : null; // Store image path

    // Create a new news request document
    const newNewsRequest = new NewsRequest({
      publisherName,
      reporterName,
      dateTime,
      category,
      headline,
      imageLink,
      remarks,
    });

    await newNewsRequest.save(); // Save to MongoDB

    res.status(201).json({
      message: "News request submitted successfully",
      newsRequest: newNewsRequest,
    });
  } catch (error) {
    console.error("Error submitting news request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all news requests
router.get("/", async (req, res) => {
  try {
    const newsrequest = await NewsRequest.find();
    res.status(200).json(newsrequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
