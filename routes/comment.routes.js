const { commentController } = require('../controllers/comment.controller');
const Router = require('express');
const router = Router();
const authmiddleware = require('../middleware/auth.middleware')

router.post('/comment', commentController.addComment);
router.get('/comments', commentController.getComments);

module.exports = router;