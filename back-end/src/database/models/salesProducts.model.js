// eslint-disable-next-line max-lines-per-function
const SaleProduct = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    'SalesProducts',
    {
      salesId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'sales_products',
    },
  );

  SalesProducts.associate = (model) => {
    SalesProducts.belongsTo(model.Sales, {
      as: 'Sale',
      foreignKey: 'salesId',
    });
    SalesProducts.belongsTo(model.Products, {
      as: 'Product',
      foreignKey: 'productId',
    });
  };
  return SalesProducts;
};

module.exports = SaleProduct;
