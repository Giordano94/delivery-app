const { Router } = require('express');
const customerOrderController = require('../controllers/customerOrderController');

const orderRoute = Router();

orderRoute.get('/:id', customerOrderController.getOrders);
orderRoute.post('/', customerOrderController.getOrdersById);

module.exports = orderRoute;
