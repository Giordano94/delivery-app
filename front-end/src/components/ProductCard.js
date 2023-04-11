import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../context/Context';

function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  const {
    products,
    setProducts,
    productAndQuantity,
    setProductAndQuantity,
  } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(0);
  const newPrice = price.replace('.', ',');

  useEffect(() => {
    const newProduct = {
      name,
      quantity,
      price,
    };

    if (products.filter((p) => p.name === newProduct.name)) {
      const newArray = products.filter((p) => p.quantity !== 0);
      const oldArray = newArray.filter((p) => p.name !== newProduct.name);
      setProducts([...oldArray, newProduct]);
    }
    const filterArray = productAndQuantity.filter((p) => p.id !== id);
    if (filterArray && quantity > 0) {
      const newObj = { id, quantity };
      filterArray.push(newObj);
      setProductAndQuantity([...filterArray]);
    }
  }, [quantity]);

  const minInput = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <h1 data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </h1>
      <h1 data-testid={ `customer_products__element-card-price-${id}` }>
        {newPrice}
      </h1>
      <img
        className="card-img"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        value="+"
        onClick={ () => setQuantity(quantity + 1) }
      >
        +
      </button>
      <input
        type="number"
        min="0"
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${id}` }
        onChange={ ({ target: { value } }) => setQuantity(Number(value)) }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        value="-"
        onClick={ minInput }
      >
        -
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
