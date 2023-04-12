import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Context from './authoContext';
import api, { setToken } from '../utils/api';

function Provider({ children }) {
  const [userAuthenticated, setUserAuthenticated] = useState(true);

  const handleLogOut = () => localStorage.removeItem('user');
  const getAuth = () => {
    api.get('/authentication')
      .then(({ data: { status } }) => {
        if (status === +'401') return setUserAuthenticated(false);
      });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return setUserAuthenticated(false);

    setToken(user.token);
    getAuth();
  }, []);

  const contextValue = useMemo(() => ({
    userAuthenticated,
    setUserAuthenticated,
  }), [userAuthenticated]);

  if (!userAuthenticated) {
    handleLogOut();
    return <Redirect to="/login" />;
  }

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
