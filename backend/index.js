require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

app.listen(PORT, () => {
  console.log("App Started");
  mongoose
    .connect(uri)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.log("MongoDB Connection Error: ", err.message);
    });
});
