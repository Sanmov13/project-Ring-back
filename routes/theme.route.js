const { themeController } = require('../controllers/theme.controller');
const Router = require('express');
const router = Router();

router.get('/themes', themeController.getTheme);
router.post('/theme', themeController.addTheme);
router.patch('/theme/:id', themeController.addLike)

module.exports = router;