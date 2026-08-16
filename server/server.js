const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/foods", foodRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Food Genie Backend is Running!");
});

// Render provides the PORT through environment variables
const PORT = process.env.PORT || 5000;

// Listen on all network interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});