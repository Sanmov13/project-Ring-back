const Comment = require('../models/Comment.model')

module.exports.commentController = {
    addComment: async (req, res) => {
        const data = await Comment.create({
            text: req.body.text,
            theme: req.body.theme,
            user: req.body.user,
            like: req.body.like
        })
        const result = await data.populate('theme user')
        res.json(result)
    },

    getComments: async (req, res) => {
        const data = await Comment.find().populate('theme user')
        res.json(data)
    },

    addLike: async (req, res) => {
        const data = await Comment.findByIdAndUpdate(req.params.id, {
            $push: { like: req.body.like }
        })
        res.json(data)
    },

    delLike: async (req, res) => {
        const data = await Comment.findByIdAndUpdate(req.params.id, {
            $pull: { like: req.body.like }
        })
        res.json(data)
    },

    deleteComment: async (req, res) => {
        const { id } = req.params;

        try {
            const comment = await Comment.findById(id)
            if (comment.user.toString() === req.user.id) {

                await comment.remove();

                return res.json(comment);
            }
            return res.status(401).json('Ошибка. Нет доступа')

        } catch (e) {
            
            return res.status(401).json('Ошибка: ' + e.toString())
        }
    }
}

// deleteComment: async (req, res) => {
//     const { id } = req.params;

//     try {
//      const comment = await Comment.findById(id)
//      console.log(comment.user.toString())
//      console.log(comment.user._id)
//      if (comment.user.toString() === req.user.id) {
//       await comment.remove();
    
//       return res.json('Deleted')
//      }

//      return res.status(401).json("Ошибка. Нет доступа")
//  } catch (e) {

//      return res.status(401).json('Ошибка: ' + e.toString())
//  }
    
//  }
// }