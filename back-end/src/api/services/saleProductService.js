const { SalesProducts } = require('../../database/models');

const createSaleProduct = async (saleId, productId, quantity) => {
  const newSaleProduct = await SalesProducts.create({
    saleId,
    productId,
    quantity,
  });

  return { type: null, message: newSaleProduct };
};

module.exports = { createSaleProduct };
