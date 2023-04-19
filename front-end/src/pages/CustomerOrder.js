import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import { reqLogin, postRegister } from '../services/apiRequest';

export default function CustomerOrders() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const req = async () => {
      const { email } = JSON.parse(localStorage.getItem('user'));
      const user = await reqLogin('/user', { email });
      const { id } = user[0];
      const pedidosArray = await postRegister('/orders', { userId: id });
      setPedidos(pedidosArray);
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
