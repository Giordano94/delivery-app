import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postRegister, reqToken } from '../services/apiRequest';

function Register() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidation, setIsValidation] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  function disableValidation() {
    const stringEmail = /\S+@\S+\.\S+/;
    const limiter = 5;
    const limiterName = 12;
    const validate = stringEmail.test(email);
    const conditionPassword = password.length >= limiter;
    const conditionName = name.length >= limiterName;
    const validation = !validate || !conditionPassword || !conditionName;
    setIsValidation(validation);
  }

  function handleNameChange({ target: { value } }) {
    setName(value);
    disableValidation();
  }

  function handleEmailChange({ target: { value } }) {
    setEmail(value);
    disableValidation();
  }

  function handlePasswordChange({ target: { value } }) {
    setPassword(value);
    disableValidation();
  }

  function handleSubmit() {
    history.push('/login');
  }

  const handleRegister = async () => {
    try {
      const userData = {
        name,
        email,
        password,
      };

      const user = await postRegister('/register', userData);

      console.log('User', user);
      reqToken(userData);

      localStorage.setItem('user', JSON.stringify(user.message));

      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      setErrorMessage(true);
    }
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          data-testid="common_register__input-name"
          type="text"
          value={ name }
          onChange={ handleNameChange }
        />
        <input
          data-testid="common_register__input-email"
          type="email"
          value={ email }
          onChange={ handleEmailChange }
        />
        <input
          data-testid="common_register__input-password"
          type="password"
          value={ password }
          onChange={ handlePasswordChange }
        />
        <button
          data-testid="common_register__button-register"
          disabled={ isValidation }
          type="button"
          onClick={ handleRegister }
        >
          Cadastrar
        </button>
        <h3
          data-testid="common_register__element-invalid_register"
          style={ { visibility: errorMessage ? 'visible' : 'hidden' } }
        >
          element-invalid
        </h3>
      </form>
    </div>
  );
}

export default Register;
