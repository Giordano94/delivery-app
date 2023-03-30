import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidation, setIsValidation] = useState(true);
  function disableValidation() {
    const stringEmail = /\S+@\S+\.\S+/;
    const limitator = 5;
    const validate = stringEmail.test(email);
    const condicion = password.length >= limitator;
    const validation = !validate || !condicion;
    setIsValidation(validation);
  }
  function handleEmail({ target: { value } }) {
    setEmail(value);
    disableValidation();
  }
  function handlePassword({ target: { value } }) {
    setPassword(value);
    disableValidation();
  }
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          data-testid="common_login__input-email"
          type="text"
          value={ email }
          onChange={ handleEmail }
        />
        <input
          data-testid="common_login__input-password"
          type="password"
          value={ password }
          onChange={ handlePassword }
        />
        <button
          data-testid="common_login__button-login"
          disabled={ isValidation }
          type="button"
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Registrar
        </button>
        <h3 data-testid="common_login__element-invalid-email" hidden>a</h3>
      </form>
    </div>
  );
}

/* Login.propTypes = {
  history: PropTypes.shape(),
}.isRequired; */

export default Login;
