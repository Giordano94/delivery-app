const fs = require('fs');
const jwt = require('jsonwebtoken');
const { findByToken } = require('../services/registerService');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found ' });
  }

  try {
    const verify = jwt.verify(
      authorization,
      fs.readFileSync('jwt.evaluation.key', 'utf8'),
    );

    const user = await findByToken(verify);

    if (!user) return res.status(401).json({ message: 'User not found' });
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
