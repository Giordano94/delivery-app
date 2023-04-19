const loginService = require('../services/loginService');
const registerService = require('../services/registerService');

const login = async (request, response) => {
    const { email, password } = request.body;
    const token = await loginService.login(email, password);
    if (!token) {
      return response.status(404).json({ message: 'Not found' });
    }
    return response.status(200).json({ token });
  };

    const getUsers = async (req, res) => {
      const { role } = req.user;
    
      if (role !== 'administrator') return res.status(401).json({ message: 'user not auth' });
    
      const { status, message } = await registerService.findUsers();
      return res.status(status).json(message);
    };

  // Bônus
    const deleteUser = async (req, res) => {
      const { role } = req.user;
      if (role !== 'administrator') return res.status(401).json({ message: 'user not auth' });
    
      const { id } = req.params;
      const { status, message } = await registerService.deleteUser(id);
      return res.status(status).json(message);
};
  
  module.exports = { login, getUsers, deleteUser };