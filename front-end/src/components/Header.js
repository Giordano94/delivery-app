import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header({
  showProdutos = true,
  showMeusPedidos = true,
  showName = true,
}) {
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
    <div className="header">
      <div className="header-products-pedidos">
        {showProdutos && (
          <button
            className="header-button-products"
            data-testid="customer_products__element-navbar-link-products"
            type="button"
          >
            PRODUTOS
          </button>
        )}
        {showMeusPedidos && (
          <Link to="/customer/orders">
            <button
              className="header-button-pedidos"
              data-testid="customer_products__element-navbar-link-orders"
              type="button"
            >
              MEUS PEDIDOS
            </button>
          </Link>
        )}
      </div>
      <div className="header-name-logout">
        {showName && (
          <button
            className="header-button-name"
            data-testid="customer_products__element-navbar-user-full-name"
            type="button"
          >
            {nome}
          </button>
        )}
        <button
          className="header-button-logout"
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ logout }
        >
          Sair
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  showProdutos: PropTypes.bool,
  showMeusPedidos: PropTypes.bool,
  showName: PropTypes.bool,
}.isRequired;

export default Header;
