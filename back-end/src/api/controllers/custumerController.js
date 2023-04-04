const customerService = require('../services/customerService');

const getAllProducts = async (_request, response) => {
  const { type, message } = await customerService.getAllProducts();

  if (!type) return response.status(200).json({ message });
  return response.status(404).json({ message });
};

module.exports = { getAllProducts };
