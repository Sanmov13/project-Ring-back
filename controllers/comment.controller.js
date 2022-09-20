const Comment = require('../models/Comment.model')

module.exports.commentController = {
    addComment: async (req, res) => {
        const data = await Comment.create({
            text: req.body.text,
            theme: req.body.theme,
            user: req.body.user
        })
        const result = await data.populate('user')
        res.json(result)
    },

    getComments: async (req, res) => {
        const data = await Comment.find().populate('user')
        res.json(data)
    }
}