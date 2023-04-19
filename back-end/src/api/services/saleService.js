const { Sales } = require('../../database/models');

const saleNotFound = 'Sale not found';

const createSale = async (sale) => {
  const newSale = await Sales.create(sale);

  return { type: null, message: newSale };
};

const getOrderById = async (userId) => {
  const sale = await Sales.findAll({ where: { userId } });

  if (!sale) return { type: 'error', message: saleNotFound };
  return { type: null, message: sale };
};

const getSellerOrderById = async (sellerId) => {
  const sale = await Sales.findAll({ where: { sellerId } });

  if (!sale) return { type: 'error', message: saleNotFound };
  return { type: null, message: sale };
};

const getSaleById = async (id) => {
  const sale = await Sales.findByPk(id);

  if (!sale) return { type: 'error', message: saleNotFound };
  return { type: null, message: sale };
};

module.exports = { createSale, getSaleById, getOrderById, getSellerOrderById };
