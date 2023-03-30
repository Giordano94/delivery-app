const loginService = require ('../services/loginService');

const login = async (request, response) => {
const { type, message }= await loginService.login(request.body);
if(!type) return response.status(200).json({message});
return response.status(404).json({message});
}

module.exports = { login };