const { Products } = require('../../database/models');

const getAllProducts = async () => {
    const products = await Products.findAll();
    return { type: null, message: products };
};

module.exports = { getAllProducts }; 
