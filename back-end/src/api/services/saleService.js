const { Sales } = require('../../database/models');

const createSale = async (sale) => {
  const newSale = await Sales.create(sale);

  return { type: null, message: newSale };
};

const getSaleById = async (id) => {
  const sale = await Sales.findByPk(id);

  if (!sale) return { type: 'error', message: 'Sale not found' };
  return { type: null, message: sale };
};

module.exports = { createSale, getSaleById };
