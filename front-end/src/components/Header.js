import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function Header({ showProdutos = true, showMeusPedidos = true, showName = true }) {
  const history = useHistory();
  const [nome, setNome] = useState('');

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setNome(name);
  });

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div>
      {((showProdutos) && (
        <button
          data-testid="customer_products__element-navbar-link-products"
          type="button"
        >
          PRODUTOS
        </button>
      ))}
      {((showMeusPedidos) && (
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
        >
          MEUS PEDIDOS
        </button>
      ))}
      {((showName) && (
        <button
          data-testid="customer_products__element-navbar-user-full-name"
          type="button"
        >
          { nome }
        </button>
      ))}
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ logout }
      >
        Sair
      </button>
    </div>
  );
}

Header.propTypes = {
  showProdutos: PropTypes.bool,
  showMeusPedidos: PropTypes.bool,
  showName: PropTypes.bool,
}.isRequired;

export default Header;
