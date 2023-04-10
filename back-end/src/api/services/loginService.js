const md5 = require('md5');
const { Users } = require('../../database/models');
const { JwtToken } = require('../../utils/JwtToken');

const login = async (email, password) => {
  const loginValidate = await Users.findOne({ where: { email } });  
  if (!loginValidate || loginValidate.password !== md5(password)) {
    return null;
  }
  const token = JwtToken(loginValidate);

  return {
    name: loginValidate.name,
    email: loginValidate.email,
    role: loginValidate.role,
    token,
  };
};

module.exports = { login };
