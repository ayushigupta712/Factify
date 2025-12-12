import mongoose from "mongoose";

const adRequestSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  adLink: { type: String, required: true },
  adImage: { type: String, required: true }, // you can use the file path or URL
  adSize: { type: String, required: true },
  adDuration: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const AdRequest = mongoose.model("AdRequest", adRequestSchema);

export default AdRequest; // Use export default instead of module.exports
