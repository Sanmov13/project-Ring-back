const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    login: String,
    password: String,
    basket: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Card'
        }
    ]
});

const User = mongoose.model("User", userSchema)
module.exports = User;