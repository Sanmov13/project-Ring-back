const { userController } = require('../controllers/user.controller');
const Router = require('express');
const router = Router();

router.post('/user', userController.registerUser);
router.post('/login', userController.login);
router.get('/users', userController.getAllUsers);

module.exports = router;