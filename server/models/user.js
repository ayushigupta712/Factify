import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true }, // not Hashed password
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  userCount: { type: Number, default: 1 },
  admin: { type: Boolean, default: false },
  publisher: { type: Boolean, default: false },
  reporter: { type: Boolean, default: false },
  activityStatus: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

const User = mongoose.model("User", userSchema, "user");

export default User;
