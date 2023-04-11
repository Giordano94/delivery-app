const { Sales } = require('../../database/models');

const createSale = async (sale) => {
  const newSale = await Sales.create(sale);

  return { type: null, message: newSale };
};

module.exports = { createSale };
