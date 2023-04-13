const { Users } = require('../../database/models');

const getSellers = async (role) => {
  const user = await Users.findAll({ where: { role } });

  if (!user) return { type: 'error', message: 'User not found ' };

  return { type: null, message: user };
};

const getUserByEmail = async (email) => {
  const userByEmail = await Users.findAll({ where: { email } });

  if (!userByEmail) return { type: 'error', message: 'Email not found ' };

  return { type: null, message: userByEmail };
};

const getUserById = async (id) => {
  const user = await Users.findByPk(id);

  if (!user) return { type: 'error', message: 'User not found' };
  return { type: null, message: user };
};
module.exports = { getSellers, getUserByEmail, getUserById };
