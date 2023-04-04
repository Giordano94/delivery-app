import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = ({ target: { value } }) => {
    if (value === '+') {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    }
    if (value === '-' && quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  return (
    <div>
      <h1 data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </h1>
      <h1 data-testid={ `customer_products__element-card-price-${id}` }>
        {price}
      </h1>
      <img src={ urlImage } alt={ name } />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        value="+"
        onClick={ handleQuantity }
      >
        +
      </button>
      <h1 data-testid={ `customer_products__input-card-quantity-${id}` }>
        {quantity}
      </h1>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        value="-"
        onClick={ handleQuantity }
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
