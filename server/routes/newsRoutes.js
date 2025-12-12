import express from "express";
import News from "../models/news.js"; // Import the News model

const router = express.Router();

// GET API to fetch all news
router.get("/", async (req, res) => {
  try {
    const news = await News.find(); // Fetch all news from DB
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Server error while fetching news" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log("Fetching news for ID:", req.params.id); // Debugging

    const news = await News.findById(req.params.id);
    console.log("Fetched News:", news); // Check if data exists

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

//POST
// Route to add approved news to the news table
router.post("/", async (req, res) => {
  try {
    const {
      publisherName,
      reporterName,
      dateTime,
      category,
      headline,
      imageLink,
      remarks,
    } = req.body;

    const newNews = new News({
      publisherName,
      reporterName,
      dateTime,
      category,
      headline,
      imageLink,
      remarks,
    });

    await newNews.save();
    res.status(201).json({ message: "News added successfully", newNews });
  } catch (error) {
    console.error("Error adding news:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
