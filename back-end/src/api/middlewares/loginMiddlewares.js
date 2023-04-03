const validatedPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
      return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
  }
  return next();
  };
  
  const validatedName = (req, res, next) => {
      const { name } = req.body;
      if (!name || name.length < 12) {
        return res.status(404).json({ message: 'Not found' });
      }
      next();
    };
  
  const validatedEmail = (req, res, next) => {
      console.log(req.body);
      const { email } = req.body;
      const regex = /\S+@\S+\.\S+/i;
      if (!email || !regex.test(email)) {
          return res.status(404).json({ message: 'Not found' });
        }
        next();
      };
    
      module.exports = {
          validatedPassword,
          validatedName,
          validatedEmail,
      };