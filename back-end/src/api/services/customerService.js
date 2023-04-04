const { Product } = require('../../database/models');

const getAllProducts = async () => {
    const products = await Product.findAll();
    return { type: null, message: products };
};

module.exports = { getAllProducts }; 
