import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header({ showProdutos = true, showGerenciar = true }) {
  function Header({
    showProdutos = true,
    showMeusPedidos = true,
    showName = true,
  }) {
    const history = useHistory();
    const [nome, setNome] = useState('');
    let linkOrders = '';

    useEffect(() => {
      const { name } = JSON.parse(localStorage.getItem('user'));
      setNome(name);

      if (showGerenciar) linkOrders = 'GERENCIAR USUARIOS';
      if (showProdutos) linkOrders = 'MEUS PEDIDOS';
    });

    const logout = () => {
      localStorage.clear();
      history.push('/login');
    };

    return (
      <div>
        {showProdutos && (
          <button
            data-testid="customer_products__element-navbar-link-products"
            type="button"
          >
            PRODUTOS
          </button>
        )}

        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
        >
          {linkOrders}
        </button>
        <button
          data-testid="customer_products__element-navbar-user-full-name"
          type="button"
        >
          {nome}
        </button>
        {showMeusPedidos && (
          <Link to="/customer/orders">
            <button
              data-testid="customer_products__element-navbar-link-orders"
              type="button"
            >
              MEUS PEDIDOS
            </button>
          </Link>
        )}
        {showName && (
          <button
            data-testid="customer_products__element-navbar-user-full-name"
            type="button"
          >
            {nome}
          </button>
        )}
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={logout}
        >
          Sair
        </button>
      </div>
    );
  }
}
Header.propTypes = {
  showProdutos: PropTypes.bool,
  showMeusPedidos: PropTypes.bool,
  showName: PropTypes.bool,
}.isRequired;

export default Header;
