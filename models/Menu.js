const mongoose = require("mongoose");
const Menu = require("./models/Menu"); 
const menuSchema = new mongoose.Schema({
  day: { type: String, required: true },
  meal: { type: String, required: true },
  items: { type: String, required: true }, // comma-separated items
});

module.exports = mongoose.model("Menu", menuSchema, "Menu"); 

