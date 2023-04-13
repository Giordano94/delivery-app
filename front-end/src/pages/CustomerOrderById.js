import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment/moment';
import { postRegister } from '../services/apiRequest';
import Header from '../components/Header';

export default function CustomerOrderById() {
  const [orders, setOrders] = useState([]);
  console.log('orders', orders);
  const history = useHistory();
  // não está acessando o useEffect
  useEffect(() => {
    const req = async () => {
      const ordersReq = await postRegister('/orders', { userId: 3 });
      setOrders(ordersReq);
    };
    req();
  }, []);
  console.log('ordersAqui', orders);

  const buttonDetails = ((id) => {
    history.push(`customer/orders/${id}`);
  });

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
