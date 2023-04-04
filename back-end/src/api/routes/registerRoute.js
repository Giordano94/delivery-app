const { Router } = require('express');
const registerController = require('../controllers/registerController');
const {
  validatedEmail,
  validatedPassword,
  validatedName,
} = require('../middlewares/loginMiddlewares');

const registerRoute = Router();

registerRoute.post(
  '/',
  validatedEmail,
  validatedPassword,
  validatedName,
  registerController.registerUser,
);

module.exports = registerRoute;
