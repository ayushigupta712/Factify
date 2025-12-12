import express from "express";
import User from "../models/user.js"; // Import User model
import Counter from "../models/counter.js"; // Import Counter model

const router = express.Router();

//  Register Route with Auto-incrementing userId
router.post("/register", async (req, res) => {
  try {
    const { email, password, fullName, username } = req.body;

    console.log("Register request received:", {
      email,
      password,
      fullName,
      username,
    });

    // Check if all fields are provided
    if (!email || !password || !fullName || !username) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists!" });
    }

    //  Get the next auto-incremented `userId`
    const counter = await Counter.findByIdAndUpdate(
      { _id: "userId" }, // Unique counter for userId
      { $inc: { seq: 1 } }, // Increment counter
      { new: true, upsert: true } // Create if doesn't exist
    );

    //  Create new user with `userId`
    const newUser = new User({
      userId: counter.seq, // Auto-incremented userId
      email,
      password, // ⚠️ Consider using bcrypt for password hashing
      fullName,
      username,
    });

    await newUser.save();
    console.log("User registered successfully:", newUser);

    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      user: newUser, //  Returning full user object
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

//  Updated Login Route (Returns Full User Object)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Login request received:", { email, password });

  try {
    // Find user in the database
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found:", email);
      return res
        .status(401)
        .json({ success: false, message: "User not found!" });
    }

    console.log("User found:", user);

    // Directly compare passwords (⚠️ Consider using bcrypt for security)
    if (user.password !== password) {
      console.log("Password mismatch:", {
        storedPassword: user.password,
        enteredPassword: password,
      });
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials!" });
    }

    console.log("Login successful:", user.email);

    res.json({
      success: true,
      message: "Login successful!",
      user, //  Returning full user object
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
