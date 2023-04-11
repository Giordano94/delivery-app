const userService = require('../services/userService');

const getSellers = async (request, response) => {
  const { q } = request.query;
  console.log(q);

  const { type, message } = await userService.getSellers(q);

  if (type) return response.status(404).json({ message });

  return response.status(200).json(message);
};

module.exports = { getSellers };