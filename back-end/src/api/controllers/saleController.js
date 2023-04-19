const saleService = require('../services/saleService');

const createSale = async (request, response) => {
  const { message } = await saleService.createSale(request.body);
  return response.status(201).json(message);
};

const getOrderById = async (request, response) => {
  const { userId } = request.body;

  const { type, message } = await saleService.getOrderById(userId);
  if (type) return response.status(404).json(message);

  return response.status(200).json(message);
};

const getSellerOrderById = async (request, response) => {
  const { sellerId } = request.body;
  console.log('sellerId', sellerId);

  const { type, message } = await saleService.getSellerOrderById(sellerId);
  if (type) return response.status(404).json(message);

  return response.status(200).json(message);
};

const getSaleById = async (request, response) => {
  const { id } = request.params;

  const { type, message } = await saleService.getSaleById(id);
  if (type) return response.status(404).json(message);

  return response.status(200).json(message);
};

module.exports = { createSale, getSaleById, getOrderById, getSellerOrderById };
