const { Router } = require('express');
const adminController = require('../controllers/adminController');
const validateToken = require('../middlewares/validateToken');
const {
    validatedEmail,
    validatedPassword,
    validatedName,
  } = require('../middlewares/loginMiddlewares');

const adminRoute = Router();

adminRoute.post(
    '/user',
  validatedEmail,
  validatedPassword,
  validatedName,
  validateToken,
  adminController.createUsers,
  );

module.exports = adminRoute;
