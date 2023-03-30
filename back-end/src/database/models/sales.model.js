// eslint-disable-next-line max-lines-per-function
const Sale = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sales',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: {
        type: DataTypes.INTEGER,
      },
      sellerId: {
        type: DataTypes.INTEGER,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(9, 2),
      },
      deliveryAddress: {
        type: DataTypes.STRING(100),
      },
      deliveryNumber: {
        type: DataTypes.STRING(50),
      },
      saleDate: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'sales',
    },
  );

  Sales.associate = (model) => {
    Sales.belongsTo(model.Users, {
      as: 'user',
      foreignKey: 'userId',
    });
    Sales.belongsTo(model.Users, {
      as: 'seller',
      foreignKey: 'sellerId',
    });
    Sales.hasMany(model.SalesProducts, {
      as: 'Products',
      foreignKey: 'salesId',
    });
  };

  return Sales;
};

module.exports = Sale;
