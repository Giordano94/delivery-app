const { Sales } = require('../../database/models');

const getOrders = async (id) => {
  const ordersByUserId = await Sales.findAll({ where: { id } });
  if (!ordersByUserId) return { type: 404, message: 'Order not found' };
  return { type: null, message: ordersByUserId };
};

const getOrdersById = async (userId) => {
  const userById = await Sales.findAll({ where: { userId } });
  return { type: null, message: userById };
};

module.exports = { getOrders, getOrdersById };
