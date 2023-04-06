import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { reqData } from '../services/apiRequest';
import ProductCard from '../components/ProductCard';

import ProductContext from '../context/Context';

function CustomerProducts() {
  const [productsArray, setProductsArray] = useState([]);
  const { products } = useContext(ProductContext);
  const [valor, setValor] = useState(0);
  const [disabled, setDisabled] = useState(0);
  console.log(products);
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
    console.log(total);
    const n2 = total.toFixed(2);
    console.log(n2);
    setDisabled(n2);
    const strPrice = n2.toString();
    const finalStrPrice = strPrice.replace('.', ',');
    setValor(finalStrPrice);
  }, [products]);

  return (
    <div>
      <Header />
      <div className="products">
        {productsArray.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))}
      </div>
      <Link to="/customer/checkout">
        <button
          disabled={ Number(disabled) === 0 }
          className="btn-carrinho"
          type="button"
          data-testid="customer_products__button-cart"
        >
          Ver Carrinho:
        </button>
        <div>
          <p
            className="display-value"
            data-testid="customer_products__checkout-bottom-value"
          >
            {valor}
          </p>
        </div>
      </Link>
    </div>
  );
}
export default CustomerProducts;
