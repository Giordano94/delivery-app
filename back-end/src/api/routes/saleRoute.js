const { Router } = require('express');
const saleController = require('../controllers/saleController');
const validateToken = require('../middlewares/validateToken');

const saleRoute = Router();

saleRoute.post('/', validateToken, saleController.createSale);
saleRoute.post('/', saleController.getOrderById);
saleRoute.get('/:id', saleController.getSaleById);

module.exports = saleRoute;
