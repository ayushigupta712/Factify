import mongoose from "mongoose";

// Define Schema
const newsRequestSchema = new mongoose.Schema({
  publisherName: {
    type: String,
    required: true,
  },
  reporterName: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    enum: ["Pending Approval", "Approved", "Rejected"],
    default: "Pending Approval",
  },
});

// Create Model
const NewsRequest = mongoose.model(
  "NewsRequest",
  newsRequestSchema,
  "newsrequest"
);

export default NewsRequest;
