const { Users } = require('../../database/models');

const getSellers = async (role) => {
  const user = await Users.findAll({ where: { role } });

  if (!user) return { type: 'error', message: 'User not found ' };

  return { type: null, message: user };
};

module.exports = { getSellers };
