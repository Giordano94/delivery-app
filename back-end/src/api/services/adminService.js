const { Op } = require('sequelize');
const crypto = require('crypto');
const { Users } = require('../../database/models');

const createUsers = async (name, email, password, role) => {
  const userExists = await Users.findOne({ where: { [Op.or]: [{ email }, { name }] } });

  if (userExists) {
    return { type: 'error', message: 'User already exists in database' };
  }

 const hashedPassword = crypto
    .createHash('md5')
    .update(password)
    .digest('hex');

  await Users.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  const userData = { name, email, role };

  return { type: null, message: userData };
};

module.exports = { createUsers };
