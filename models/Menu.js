const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  day: { type: String, required: true },
  meal: { type: String, required: true },
  items: { type: String, required: true },
});

module.exports = mongoose.model("Menu", menuSchema, "Menu");
