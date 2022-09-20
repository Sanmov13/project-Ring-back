const mongoose = require("mongoose");

const themeSchema = mongoose.Schema({
  name: String,
  text: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  likes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
});

const Theme = mongoose.model("Theme", themeSchema);

module.exports = Theme;
