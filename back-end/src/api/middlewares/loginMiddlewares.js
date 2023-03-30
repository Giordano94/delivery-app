const validatedPassword = (request, response, next) => {
const { password } = request.body;
if (!password) {
    return response.status(400).json({ message: 'All fields must be filled' });
}
if (password.length < 6) {
    return response.status(401).json({ message: 'Invalid email or password' });
}
return next();
};

const validatedEmail = (request, response, next) => {
    const { email } = request.body;
    const regex = /\S+@\S+\.\S+/i;
    if (!email) {
        return response.status(400).json({ message: 'All fields must be filled' });
    }
    if (!regex.test(email)) {
        return response.status(401).json({ message: 'Invalid email or password' });
    }
    return next();
    };
    
    module.exports = {
        validatedPassword,
        validatedEmail,
    };
