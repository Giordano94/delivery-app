const { Router } = require('express');
const userController = require('../controllers/userController');

const userRoute = Router();

userRoute.get('/search', userController.getSellers);
userRoute.post('/', userController.getUserByEmail);

module.exports = userRoute;
