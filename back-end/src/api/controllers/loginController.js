const loginService = require('../services/loginService');

const login = async (request, response) => {
    const { email, password } = request.body;
    const token = await loginService.login(email, password);
    if (!token) {
      return response.status(404).json({ message: 'Not found' });
    }
    return response.status(200).json({ token });
  };
  
  module.exports = { login };