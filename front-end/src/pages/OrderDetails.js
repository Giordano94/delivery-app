import React, { useContext } from 'react';

import ProductContext from '../context/Context';
import Header from '../components/Header';
import HeaderDetails from '../components/HeaderDetails';

export default function OrderDetails() {
  const { products, valorTotal } = useContext(ProductContext);

  const dataIndex = 'customer_order_details__element-order-table-item-number-';
  const testSubTotal = 'customer_order_details__element-order-table-sub-total-';
  const testPrice = 'customer_order_details__element-order-table-unit-price-';
  const testQuantity = 'customer_order_details__element-order-table-quantity-';
  const testName = 'customer_order_details__element-order-table-name-';
  const totalPrice = 'customer_order_details__element-order-total-price';

  const addComma = (value) => {
    const string = value.toString();
    const repl = string.replace('.', ',');
    return repl;
  };

  return (
    <div>
      <Header />
      <h1>Detalhes do Pedido</h1>
      <HeaderDetails />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ name, price, quantity }, index) => (
            <tr key={ index }>
              <td data-testid={ `${dataIndex}${index}` }>{index + 1}</td>
              <td data-testid={ `${testName}${index}` }>{name}</td>
              <td data-testid={ `${testQuantity}${index}` }>{quantity}</td>
              <td data-testid={ `${testPrice}${index}` }>{addComma(price)}</td>
              <td data-testid={ `${testSubTotal}${index}` }>
                {addComma((quantity * price).toFixed(2))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div />
      <p data-testid={ totalPrice }>{valorTotal.replace('.', ',')}</p>
    </div>
  );
}
