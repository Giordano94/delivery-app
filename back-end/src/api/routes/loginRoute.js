const { Router } = require('express');
const loginController = require('../controllers/loginController');
// const { validatedEmail, validatedPassword } = require('../middlewares/loginMiddlewares');

const loginRoute = Router();

loginRoute.post('/', loginController.login);

module.exports = loginRoute;
