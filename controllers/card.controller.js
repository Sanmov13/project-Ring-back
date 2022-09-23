const Card = require("../models/Card.model");

module.exports.cardController = {
  addCard: async (req, res) => {
    try {
      const { title, price, image } = req.body;
      const data = await Card.create({
        title,
        price,
        image
      });
      res.json(data);
    } catch (e) {
      return res.status(400).json(e.toString());
    }
  },

  getCard: async (req, res) => {
    try {
      const data = await Card.find()
      await res.json(data);
    } catch (e) {
      return res.status(400).json(e.toString());
    }
  },

};