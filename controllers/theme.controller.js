const Theme = require('../models/Theme.model')

module.exports.themeController = {
  getTheme: async (req, res) => {
    const data = await Theme.find();
    await res.json(data);
  },

  addTheme: async (req, res) => {
    const data = await Theme.create({
      name: req.body.name,
      text: req.body.text,
      user: req.body.user,
      likes: req.body.likes,
    });
    await res.json(data);
  },

  addLike: async (req, res) => {
    const data = await Theme.findByIdAndUpdate(req.params.id, {
      $addToSet: { likes: req.body.likes }
    })
    res.json(data)
  },

  deleteLike: async (req, res) => {
    const data = await Theme.findByIdAndUpdate(req.params.id, {
      $pull: { likes: req.body.likes }
    })
    res.json(data)
  }
};