import React from "react";
import PropTypes from 'prop-types';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidation, setIsValidation] = useState(true);
    const { handleEmail, handlePassWord,  } = 

  function disableValidation(){
    const stringEmail = /\S+@\S+\.\S+/;
    const limitator = 6;
    const validate = stringEmail.test(email);
    const condicion = password.length >= limitator;

    const validation = (
      !validate || !condicion
    )
    setIsValidation(validation)
  }

    

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input 
          data-testid="email-input"
          type="text"
          value={ email }
          onChange={ handleEmail }
        />
        <input
          data-testid="password-input"
          type="password"
          value={ password }
          onChange={ handlePassword }
        />
        <button 
          data-testid="login-submit-btn"
          disabled={ isValidation }
        >
          
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
    history: PropTypes.shape(),
  }.isRequired;

export default Login;
