import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ProductContext from '../context/Context';
import {
  reqSellers,
  postRegister,
  reqData,
  postSales,
} from '../services/apiRequest';

export default function FormCheckout() {
  const { valorTotal, productAndQuantity } = useContext(ProductContext);
  const history = useHistory();
  const [sellersSelect, setSellersSelect] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState(2);
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');

  const getSellers = async () => {
    const sellers = await reqSellers('/user/search?q=seller');
    setSellersSelect(sellers);
  };

  useEffect(() => {
    getSellers();
  }, []);

  const postData = async () => {
    const users = await reqData('/user/search?q=customer');
    const localUser = JSON.parse(localStorage.getItem('user'));
    const u = users.filter((user) => user.email === localUser.email);

    const finalData = {
      userId: u[0].id,
      sellerId: selectedSeller,
      totalPrice: valorTotal.replace(',', '.'),
      deliveryAddress: endereco,
      deliveryNumber: numero,
      saleDate: Date.now(),
      status: 'Pendente',
      token: localUser.token,
    };

    const postSeller = await postSales('/sale', finalData);

    const { id } = postSeller;

    productAndQuantity.map(async (p) => {
      const saleProductObj = {
        saleId: id,
        productId: p.id,
        quantity: p.quantity,
      };
      await postRegister('/saleProduct', saleProductObj);
    });
    history.push(`/customer/orders/${id}`);
  };

  return (
    <section className="customer-order">
      <select
        onChange={ (e) => setSelectedSeller(e.target.value) }
        data-testid="customer_checkout__select-seller"
      >
        {sellersSelect.map(({ name, id }) => (
          <option key={ id } value={ id }>
            {name}
          </option>
        ))}
      </select>
      <input
        data-testid="customer_checkout__input-address"
        id="endereco"
        type="text"
        value={ endereco }
        onChange={ (e) => setEndereco(e.target.value) }
      />
      <input
        data-testid="customer_checkout__input-address-number"
        type="number"
        value={ numero }
        onChange={ (e) => setNumero(e.target.value) }
      />
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ postData }
      >
        FINALIZAR PEDIDO
      </button>
    </section>
  );
}
