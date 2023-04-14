const { Router } = require('express');
const adminController = require('../controllers/adminController');
const validateToken = require('../middlewares/validateToken');

const adminRoute = Router();

adminRoute.post('/user', validateToken, adminController.createUsers);

module.exports = adminRoute;
