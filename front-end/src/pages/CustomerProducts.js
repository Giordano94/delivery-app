import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { reqData } from '../services/apiRequest';
import ProductCard from '../components/ProductCard';

import ProductContext from '../context/Context';

function CustomerProducts() {
  const [productsArray, setProductsArray] = useState([]);
  const { products, setValorTotal } = useContext(ProductContext);
  const [valor, setValor] = useState(0);
  const [disabled, setDisabled] = useState(0);
  const req = async () => {
    const result = await reqData('/products');
    setProductsArray(result);
  };

  useEffect(() => {
    req();
    const total = products.reduce(
      (acc, curr) => acc + Number(curr.price) * Number(curr.quantity),
      0,
    );
    const n2 = total.toFixed(2);
    setDisabled(n2);
    const strPrice = n2.toString();
    const finalStrPrice = strPrice.replace('.', ',');
    setValor(finalStrPrice);
    setValorTotal(finalStrPrice);
  }, [products]);

  return (
    <div>
      <Header />
      <Link to="/customer/checkout">
        <div>
          <button
            disabled={ Number(disabled) === 0 }
            type="button"
            data-testid="customer_products__button-cart"
          >
            Ver Carrinho:
            <p data-testid="customer_products__checkout-bottom-value">
              {valor}
            </p>
          </button>
        </div>
      </Link>
      <div>
        {productsArray.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))}
      </div>
    </div>
  );
}
export default CustomerProducts;
