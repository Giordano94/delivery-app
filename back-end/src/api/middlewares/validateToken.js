const fs = require('fs');
const jwt = require('jsonwebtoken');
const { findByToken } = require('../services/registerService');

// eslint-disable-next-line max-lines-per-function
module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found ' });
  }

  try {
    const verify = jwt.verify(
      authorization,
      fs.readFileSync('jwt.evaluation.key', 'utf8'),
    );
    console.log('verify', verify);
    const user = await findByToken(verify);
    console.log('user', user);

    if (!user) return res.status(401).json({ message: 'User not found' });
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
