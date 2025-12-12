import mongoose from "mongoose"; // Use import instead of require

// Define your Ad schema
const adSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  redirectLink: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  adDuration: {
    type: String,
    required: true,
  },
  adheadline: {
    type: String,
    required: true,
  },
});

// Export the model as default
const Ad = mongoose.model("Ad", adSchema);

export default Ad; // Ensure the export is default
