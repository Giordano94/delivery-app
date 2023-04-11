const saleService = require('../services/saleService');

const createSale = async (request, response) => {
  const { message } = await saleService.createSale(request.body);
  return response.status(201).json(message);
};

module.exports = { createSale };
