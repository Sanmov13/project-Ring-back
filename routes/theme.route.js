const { themeController } = require('../controllers/theme.controller');
const Router = require('express');
const router = Router();
const fileMiddleware = require('../middleware/file')

router.get('/themes', themeController.getTheme);
router.post('/theme', themeController.addTheme);
router.patch('/theme/:id', themeController.addLike)

router.post('/upload', fileMiddleware.single('avatar'), (req, res) => {
    try {
        if (req.file) {
            console.log(req.file)
            res.json(req.file)
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;