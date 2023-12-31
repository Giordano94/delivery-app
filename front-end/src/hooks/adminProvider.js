import PropTypes from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import api from '../utils/api';
import authentication from '../utils/authentication';
import AdminContext from './adminContext';

export default function AdminProvider({ children }) {
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

AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
