import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import { reqLogin, reqOrders } from '../services/apiRequest';

export default function CustomerOrders() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const req = async () => {
      const { email } = JSON.parse(localStorage.getItem('user'));
      console.log('email', email);
      const user = await reqLogin('/user', { email });
      console.log('user', user);
      const { id } = user[0];
      console.log(id);
      const pedidosArray = await reqOrders(`/orders/${id}`);
      setPedidos(pedidosArray);
      console.log('pedidos', pedidos);
    };
    req();
  }, []);

  return (
    <div>
      <Header />
      {pedidos.map((pedido, index) => (
        <OrderCard order={ pedido } key={ index } />
      ))}
    </div>
  );
}
