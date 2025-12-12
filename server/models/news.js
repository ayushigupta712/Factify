import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  image: String,
  headline: String,
  articleNumber: Number,
  publisher: String,
  content: String,
  likes: { type: Number, default: 0 },
  comments: [{ user: String, text: String }],
  createdAt: { type: Date, default: Date.now },
});

const News = mongoose.model("News", newsSchema, "news");
export default News; // Use export default for ES Module
