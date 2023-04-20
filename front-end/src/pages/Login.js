import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { reqLogin, reqToken } from '../services/apiRequest';
import '../styles/LoginCss.css';

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

  const redirect = () => {
    const userExists = JSON.parse(localStorage.getItem('user'));
    if (userExists !== null) {
      if (userExists.role === 'customer') {
        history.push('/customer/products');
      } else if (userExists.role === 'seller') {
        history.push('/seller/products');
      } else if (userExists.role === 'administrator') {
        history.push('/admin/manage');
      }
    }
  };



  useEffect(() => {
    redirect();
  }, []);

  useEffect(() => {
    stringEmail = email.match(/\S+@\S+\.\S+/i);
  }, [email]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { token } = await reqLogin('/login', { email, password });

      reqToken(token);

      localStorage.setItem('user', JSON.stringify(token));

      const loggedUser = JSON.parse(localStorage.getItem('user'));
      const { role } = loggedUser;
      if (role === 'customer') {
        history.push('/customer/products');
      } else if (role === 'seller') {
        history.push('/seller/orders');
      }

    } catch (error) {
      console.log(error);
      setIsValidation(true);
    }
  };
  return (
    <div className="login-page">
      <form className="form-login">
        <div className="input-email">
          Login
          <input
            className="input"
            type="email"
            placeholder="Digite seu email:"
            data-testid={ `${commonLogin}${inputEmail}` }
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="input-senha">
          Senha
          <input
            className="input"
            type="password"
            placeholder="Digite sua senha:"
            data-testid={ `${commonLogin}${inputPassword}` }
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        <button
          className="button-entrar"
          type="button"
          data-testid={ `${commonLogin}${buttonLogin}` }
          disabled={ !(stringEmail && password.length >= limitator) }
          onClick={ (e) => handleLogin(e) }
        >
          LOGIN
        </button>
        <button
          onClick={ () => history.push('/register') }
          type="button"
          className="button-cadastrar"
          data-testid={ `${commonLogin}${buttonRegister}` }
        >
          Ainda não tenho conta
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
