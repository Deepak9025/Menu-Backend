const express = require("express");
const Menu = require("../models/Menu");

const router = express.Router();

// Get menu by day and meal
router.post("/getMenu", async (req, res) => {
  try {
    const { day, meal } = req.body;

    const menu = await Menu.findOne({ day, meal });

    if (!menu) {
      return res.status(404).json({ items: "Menu not found for this selection" });
    }

    res.json({ items: menu.items });
  } catch (error) {
    res.status(500).json({ items: "Error fetching menu" });
  }
});

module.exports = router;
