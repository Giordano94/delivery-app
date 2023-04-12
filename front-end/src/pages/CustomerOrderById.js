import React, { useContext } from 'react';
import Header from '../components/Header';
import ProductContext from '../context/Context';

export default function CustomerOrderById() {
  const { orderGlobal } = useContext(ProductContext);
  const { id, status, saleDate, totalPrice } = orderGlobal;
  console.log('totalPrice', totalPrice);
  console.log('id', id);
  console.log('status', status);
  console.log('orderGlobal', orderGlobal);

  const dateHour = new Date(saleDate);
  const number2 = -2;
  const day = dateHour.getDate().toString().padStart(2, '0');
  const month = (dateHour.getMonth() + 1).toString().padStart(2, '0');
  const year = dateHour.getFullYear().toString().substr(number2);
  const formatDate = `${day}/${month}/${year}`;

  return (
    <div>
      <Header />
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
    </div>
  );
}
