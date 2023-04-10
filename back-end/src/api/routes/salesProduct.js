const { Router } = require('express');
const saleProductController = require('../controllers/saleProductController');

const saleProductRoute = Router();

saleProductRoute.post('/', saleProductController.createSaleProduct);

module.exports = saleProductRoute;
