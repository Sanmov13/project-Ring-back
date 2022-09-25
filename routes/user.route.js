const { userController } = require('../controllers/user.controller');
const Router = require('express');
const router = Router();

router.post('/user', userController.registerUser);
router.post('/login', userController.login);
router.get('/users', userController.getAllUsers);
router.patch('/basket', userController.addInBasket)
router.patch('/basket/remove', userController.removeFromBasket)
router.patch('/allBasket/remove', userController.removeAllBasket)
router.get('/basket/:userId', userController.getBasket)

module.exports = router;