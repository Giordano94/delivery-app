const { Router } = require('express');
const saleController = require('../controllers/saleController');
const validateToken = require('../middlewares/validateToken');

const saleRoute = Router();

saleRoute.post('/', validateToken, saleController.createSale);

module.exports = saleRoute;