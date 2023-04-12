import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AdminContext from './adminContext';
import api from '../utils/api';
import authentication from '../utils/authentication';

export default function adminProvider({ children }) {
  const [dataUsers, setDataUsers] = useState([]);

  const getUsers = useCallback(async () => {
    authentication();
    const { data } = await api.get('/users');
    setDataUsers(data);
  }, []);

  const contextValue = useMemo(() => ({
    dataUsers,
    setDataUsers,
    getUsers,
  }), [dataUsers, getUsers]);

  return (
    <AdminContext.Provider value={ contextValue }>
      {children}
    </AdminContext.Provider>
  );
}

adminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
