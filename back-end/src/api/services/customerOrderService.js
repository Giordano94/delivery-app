const { Sales } = require('../../database/models');

const getOrders = async (id) => {
  const ordersByUserId = await Sales.findAll({ where: { userId: id } });
  console.log('ordersByUserId', ordersByUserId);
  if (!ordersByUserId.length) return { type: 404, message: 'Order not found' };
  return { type: null, message: ordersByUserId };
};

module.exports = { getOrders };
