const { themeController } = require('../controllers/theme.controller');
const Router = require('express');
const router = Router();

router.get('/user', themeController.getTheme);
router.post('/login', themeController.addTheme);
router.patch('/theme/:id', themeController.addLike)

module.exports = router;