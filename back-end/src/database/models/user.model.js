// eslint-disable-next-line max-lines-per-function
const User = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      role: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users',
    },
  );

  Users.associate = (models) => {
    Users.hasMany(models.Sales, {
      as: 'sales',
      foreignKey: 'sellerId',
    });

    Users.hasMany(models.Sales, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return Users;
};

module.exports = User;
