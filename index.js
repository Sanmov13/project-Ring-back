require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));
app.use(cors());

app.use(require('./routes/user.route'))
app.use(require('./routes/comment.routes'))
app.use(require('./routes/theme.route'))
app.use(require('./routes/card.routes'))


app.use(express.static(path.resolve(__dirname, "public")));
app.use('/public', express.static(path.join(__dirname, 'public')))

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
