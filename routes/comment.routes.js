const { commentController } = require('../controllers/comment.controller');
const Router = require('express');
const router = Router();
const authmiddleware = require('../middleware/auth.middleware')

router.post('/comment', commentController.addComment);
router.get('/comments', commentController.getComments);
router.patch('/likeAdd/:id', commentController.addLike)
router.patch('/likeDel/:id', commentController.delLike)

module.exports = router;