const saleProductService = require('../services/saleProductService');

const createSaleProduct = async (request, response) => {
  const { saleId, productId, quantity } = request.body;

  const { type, message } = await saleProductService.createSaleProduct(
    saleId,
    productId,
    quantity,
  );

  if (!type) return response.status(201).json({ message });
  return response.status(409).json({ message });
};

module.exports = { createSaleProduct };
