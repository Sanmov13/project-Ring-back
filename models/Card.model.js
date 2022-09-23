const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  title: String,
  price: Number,
  image: String,
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;