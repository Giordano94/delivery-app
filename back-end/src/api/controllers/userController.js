const userService = require('../services/userService');

const getSellers = async (request, response) => {
  const { q } = request.query;
  console.log(q);

  const { type, message } = await userService.getSellers(q);

  if (type) return response.status(404).json({ message });

  return response.status(200).json(message);
};

const getUserByEmail = async (request, response) => {
  const { email } = request.body;

  const { type, message } = await userService.getUserByEmail(email);
  if (type) return response.status(404).json({ message });

  return response.status(200).json(message);
};

const getUserById = async (request, response) => {
  const { id } = request.params;

  const { type, message } = await userService.getUserById(id);
  if (type) return response.status(404).json(message);

  return response.status(200).json(message);
};

module.exports = { getSellers, getUserByEmail, getUserById };
