require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Custom logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Inventory API is Running");
});

app.get("/health", (req, res) => {
  res.json({ status: "Server is healthy" });
});

// Import Item Route
const itemRoutes = require("./routes/itemRoutes");
app.use("/items", itemRoutes);

// 404 Middleware
app.use((req, res) => {
  res.status(404).json({ error: "Route Not Found" });
});




// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("DB Connection Error:", err));
