const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const menuRoutes = require("./routes/menuRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
