const customerOrderService = require('../services/customerOrderService');

const getOrders = async (request, response) => {
  const { id } = request.params;
  console.log('id', id);
  const { type, message } = await customerOrderService.getOrders(id);

  if (type) return response.status(type).json({ message });

  return response.status(200).json(message);
};

module.exports = { getOrders };
