import React, { useMemo, useState } from 'react';
import { node } from 'prop-types';
import ProductContext from './Context';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [valorTotal, setValorTotal] = useState('');
  const [productAndQuantity, setProductAndQuantity] = useState([]);
  const [orderGlobal, setOrderGlobal] = useState({});
  const context = useMemo(
    () => ({
      products,
      setProducts,
      valorTotal,
      setValorTotal,
      productAndQuantity,
      setProductAndQuantity,
      orderGlobal,
      setOrderGlobal,
    }),
    [
      products,
      setProducts,
      setValorTotal,
      valorTotal,
      productAndQuantity,
      setProductAndQuantity,
      orderGlobal,
      setOrderGlobal,
    ],
  );

  return (
    <ProductContext.Provider value={ context }>
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: node.isRequired,
};
