import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import newsRoutes from "./routes/newsRoutes.js";
import authenticate from "./routes/auth.js";
import adsRoutes from "./routes/ads.js";
import newsrequestRoutes from "./routes/newsrequestRoutes.js";
import adRequestRoutes from "./routes/adRequestRoutes.js";
// import instamojoRouter from "./routes/instamojo.js";
import axios from "axios";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Routes
app.use("/api/auth", authenticate);
app.use("/api/news", newsRoutes);
app.use("/api/newsrequest", newsrequestRoutes);
app.use("/api/ads", adsRoutes);
app.use("/api/adrequests", adRequestRoutes);
// app.use("/api/payment", instamojoRouter);

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://AyushiGupta:7120786@cluster0.z01u5.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

// Handle preflight requests
app.options("*", cors());

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
