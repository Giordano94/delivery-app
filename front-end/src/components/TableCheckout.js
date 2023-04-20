import React, { useContext } from 'react';
import ProductContext from '../context/Context';

export default function TableCheckout() {
  const { products, setProducts, valorTotal, setValorTotal } = useContext(ProductContext);
  const dataIndex = 'customer_checkout__element-order-table-item-number-';
  const testSubTotal = 'customer_checkout__element-order-table-sub-total-';
  const testPrice = 'customer_checkout__element-order-table-unit-price-';
  const testQuantity = 'customer_checkout__element-order-table-quantity-';
  const testName = 'customer_checkout__element-order-table-name-';

  const removeItem = (name, price, quantity) => {
    const newProducts = products.filter((product) => product.name !== name);
    setProducts(newProducts);
    const newValue = Number(valorTotal.replace(',', '.'))
      - Number(price.replace(',', '.')) * Number(quantity);
    let str = newValue.toFixed(2);
    if (str === '-0.00') {
      str = '0.00';
    }
    setValorTotal(str);
  };

  const addComma = (value) => {
    const string = value.toString();
    const repl = string.replace('.', ',');
    return repl;
  };

  return (
    <section>
      <h3>Finalizar Pedido</h3>
      <table className="table-checkout">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
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
              <td>
                <button
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick={ () => removeItem(name, price, quantity) }
                  type="button"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
          <tr data-testid="customer_checkout__element-order-total-price">
            {addComma(valorTotal)}
          </tr>
        </tbody>
      </table>
    </section>
  );
}
