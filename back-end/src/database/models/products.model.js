// eslint-disable-next-line max-lines-per-function
const Product = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
      },

      price: {
        type: DataTypes.DECIMAL(4, 2),
      },

      urlImage: {
        type: DataTypes.STRING(200),
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'products',
    },
  );

  Products.associate = (model) => {
    Products.hasMany(model.SalesProducts, {
      as: 'Sales',
      foreignKey: 'productId',
    });
  };
  return Products;
};

module.exports = Product;
