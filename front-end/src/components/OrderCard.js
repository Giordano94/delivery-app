import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ order }) {
  const { id, status, saleDate, totalPrice } = order;

  const dateHour = new Date(saleDate);
  const number2 = -2;
  const day = dateHour.getDate().toString().padStart(2, '0');
  const month = (dateHour.getMonth() + 1).toString().padStart(2, '0');
  const year = dateHour.getFullYear().toString().substr(number2);
  const formatDate = `${day}/${month}/${year}`;

  return (
    <Link to={ `/customer/orders/${id}` } key={ id }>
      <div>
        <h2 data-testid={ `customer_orders__element-order-id-${id}` }>
          Pedido
          {' '}
          {id}
        </h2>
        <h1 data-testid={ `customer_orders__element-delivery-status-${id}` }>
          {status}
        </h1>
        <h2 data-testid={ `customer_orders__element-order-date-${id}` }>
          {formatDate}
        </h2>
        <h2 data-testid={ `customer_orders__element-card-price-${id}` }>
          {totalPrice.replace('.', ',')}
        </h2>
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    saleDate: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
