import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { reqData } from '../services/apiRequest';
import ProductCard from '../components/ProductCard';

function CustomerProducts() {
  const [products, setProducts] = useState([]);

  const req = async () => {
    const result = await reqData('/products');
    setProducts(result);
    console.log(result);
  };

  useEffect(() => {
    req();
  }, []);

  return (
    <div>
      <Header />
      <div className="products">
        {products
          .map((product) => <ProductCard key={ product.id } product={ product } />)}
      </div>
    </div>
  );
}

export default CustomerProducts;
