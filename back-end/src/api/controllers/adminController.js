const adminService = require('../services/adminService');

const createUsers = async (request, response) => {
  const { name, email, password, role } = request.body;
  const { type, message } = await adminService.createUsers(name, email, password, role);
  if (type) return response.status(409).json({ message });
  return response.status(201).json(message);
};

module.exports = { createUsers };
