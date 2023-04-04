const registerService = require('../services/registerService');

const registerUser = async (request, response) => {
  const { name, email, password } = request.body;

  const { type, message } = await registerService.registerUser(
    name,
    email,
    password,
  );

  if (!type) return response.status(201).json({ message });
  return response.status(409).json({ message });
};

module.exports = { registerUser };
