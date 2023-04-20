const { Op } = require('sequelize');
const crypto = require('crypto');
const { Users } = require('../../database/models');
const { JwtToken } = require('../../utils/JwtToken');

const findByToken = async ({ data: { name, email, role } }) => {
  const user = Users.findOne({ where: { name, email, role } });
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

// Listar os usuários
const findUsers = async () => {
  const find = await Users.findAll({ 
    where: { role: { [Op.ne]: 'administrator' } },
    attributes: { exclude: ['password'] },
  });

  return { type: 200, message: find };
};

// Deletar usuários BÔNUS !
const deleteUser = async (id) => {
  const destroy = await Users.destroy({ where: { id } });
  return { type: 204, message: destroy };
};

module.exports = { registerUser, findByToken, findUsers, deleteUser };
