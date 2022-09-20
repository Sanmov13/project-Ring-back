require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(require('./routes/user.route'))

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Подключились к базе");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  console.log("Подключились к серверу");
});

start();
