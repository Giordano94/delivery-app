import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import ProductContext from '../context/Context';

function OrderCard({ order }) {
  const { id, status, saleDate, totalPrice } = order;
  const { setOrderGlobal } = useContext(ProductContext);
  const history = useHistory();

  const handleClick = () => {
    setOrderGlobal(order);
    history.push(`/customer/orders/${id}`);
  };
  console.log(id);

  return (
    <button type="button" onClick={ handleClick }>
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
          {moment(saleDate).format('DD/MM/YYYY')}
        </h2>
        <h2 data-testid={ `customer_orders__element-card-price-${id}` }>
          {totalPrice?.replace('.', ',')}
        </h2>
      </div>
    </button>
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
