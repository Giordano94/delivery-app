const { Sales } = require('../../database/models');

const createSale = async (sale, auth) => {
  const newSale = await Sales.create(sale, auth);

  return { type: null, message: newSale };
};

module.exports = { createSale };
