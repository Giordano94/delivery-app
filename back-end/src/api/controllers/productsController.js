const productsService = require('../services/productsService');

const getAllProducts = async (_request, response) => {
  const { message } = await productsService.getAllProducts();
  return response.status(200).json(message);
};

module.exports = { getAllProducts };
