const customerOrderService = require('../services/customerOrderService');

const getOrders = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await customerOrderService.getOrders(id);

  if (type) return response.status(type).json({ message });

  return response.status(200).json(message);
};

const getOrdersById = async (req, res) => {
  const { userId } = req.body;
  const { message } = await customerOrderService.getOrdersById(userId);
  return res.status(200).json(message);
};

module.exports = { getOrders, getOrdersById };
