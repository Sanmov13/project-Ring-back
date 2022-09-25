const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  countInBasket:{
    type: Number,
    default: 1
}
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;