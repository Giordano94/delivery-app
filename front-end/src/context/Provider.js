import React, { useMemo, useState } from 'react';
import { node } from 'prop-types';
import ProductContext from './Context';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const context = useMemo(() => ({
    products,
    setProducts,
  }), [products, setProducts]);

  return (
    <ProductContext.Provider value={ context }>{ children }</ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: node.isRequired,
};
