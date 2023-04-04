import React from 'react';
import PropTypes from 'prop-types';

function Header({ showProdutos = true, showMeusPedidos = true, showName = true }) {
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
          Name
        </button>
      ))}
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
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
