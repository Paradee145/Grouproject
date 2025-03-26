const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// ✅ Enable CORS (For Frontend Requests)
app.use(cors());

// ✅ Middleware to parse JSON requests
app.use(express.json());

// ✅ Import Authentication Middleware (For Protected Routes)
const protect = require("./middleware/auth");

// ✅ Import Routes
const employeeRoutes = require("./routes/employees");
const authRoutes = require("./routes/auth");

// ✅ API Routes
app.use("/employees", protect, employeeRoutes); // Protect employees route
app.use("/api/auth", authRoutes); // Authentication routes

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Handle Undefined Routes (404 Not Found)
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("✅ MongoDB connected successfully!");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });



