import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { reqLogin, reqToken } from '../services/apiRequest';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidation, setIsValidation] = useState(false);

  const commonLogin = 'common_login__';
  const inputEmail = 'input-email';
  const inputPassword = 'input-password';
  const buttonLogin = 'button-login';
  const buttonRegister = 'button-register';
  const elementInvalidEmail = 'element-invalid-email';

  const limitator = 6;
  let stringEmail = email.match(/\S+@\S+\.\S+/i);

  useEffect(() => {
    history.push('/login');
  }, []);

  useEffect(() => {
    stringEmail = email.match(/\S+@\S+\.\S+/i);
  }, [email]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { token } = await reqLogin('/login', { email, password });

      reqToken(token);

      localStorage.setItem('token', token);

      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      setIsValidation(true);
    }
  };
  return (
    <div>
      <form>
        <input
          type="email"
          data-testid={ `${commonLogin}${inputEmail}` }
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          type="password"
          data-testid={ `${commonLogin}${inputPassword}` }
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          type="button"
          data-testid={ `${commonLogin}${buttonLogin}` }
          disabled={ !(stringEmail && password.length >= limitator) }
          onClick={ (e) => handleLogin(e) }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid={ `${commonLogin}${buttonRegister}` }
        >
          I dont have a record
        </button>
      </form>
      <p
        data-testid={ `${commonLogin}${elementInvalidEmail}` }
        style={ { visibility: isValidation ? 'visible' : 'hidden' } }
      >
        Error message
      </p>
    </div>
  );
}

export default Login;
