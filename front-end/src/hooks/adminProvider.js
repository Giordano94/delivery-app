import React, { UseCallback, UseMemo, UseState } from 'react';
import PropTypes from 'prop-types';
import AdminContext from './adminContext';
import api from '../utils/api';
import authentication from '../utils/authentication';

export default function adminProvider({ children }) {
  const [dataUsers, setDataUsers] = UseState([]);

  const getUsers = UseCallback(async () => {
    authentication();
    const { data } = await api.get('/users');
    setDataUsers(data);
  }, []);

  const contextValue = UseMemo(() => ({
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
