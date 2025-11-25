const express = require("express");
const Item = require("../models/item");
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item" });
  }
});


router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

module.exports = router;
