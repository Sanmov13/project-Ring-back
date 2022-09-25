const { commentController } = require('../controllers/comment.controller');
const Router = require('express');
const router = Router();
const authMiddleware = require('../middleware/auth.middleware');

router.post('/comment', authMiddleware, commentController.addComment);
router.get('/comments', commentController.getComments);
router.patch('/likeAdd/:id', authMiddleware , commentController.addLike);
router.patch('/likeDel/:id', authMiddleware , commentController.delLike);
router.delete('/delComment/:id', authMiddleware, commentController.deleteComment);

module.exports = router;