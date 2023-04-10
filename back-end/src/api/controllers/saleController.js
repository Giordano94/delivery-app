const saleService = require('../services/saleService');

const createSale = async (request, response) => {
  const { authorization } = request.headers;
  // console.log('request.headers', request.headers.authorization);
  console.log('request.body', request.body);
  console.log('authorization', authorization);
  const { message } = await saleService.createSale(request.body);
  return response.status(201).json(message);
};

module.exports = { createSale };
