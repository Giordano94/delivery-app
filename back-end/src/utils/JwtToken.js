const fs = require('fs');
const jwt = require('jsonwebtoken');

const JWT = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const JwtToken = (loginValidate) => {
  const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8') || 'secret';
  console.log(secret, 'Aqui');
  const token = jwt.sign({ data: loginValidate }, secret, JWT);
  return token;
};

module.exports = { JwtToken };