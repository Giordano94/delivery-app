const { Op } = require('sequelize');
const crypto = require('crypto');
const { Users } = require('../../database/models');
const { JwtToken } = require('../../utils/JwtToken');

const findByToken = async ({ data: { name, email, role } }) => {
  const user = Users.findOne({ where: { name, email, role } });
  console.log('userService', user);
  return user;
};

const registerUser = async (name, email, password) => {
  const userExists = await Users.findOne({ where: { [Op.or]: [{ email }, { name }] },
  });

  if (userExists) {
    return { type: 'error', message: 'User already exists in database' };
  }

  const hashedPassword = crypto
    .createHash('md5')
    .update(password)
    .digest('hex');

  const user = await Users.create({
    name,
    email,
    password: hashedPassword,
    role: 'customer',
  });

  const token = JwtToken(user);

  const userData = { name, email, role: 'customer', token };

  return { type: null, message: userData };
};

module.exports = { registerUser, findByToken };
