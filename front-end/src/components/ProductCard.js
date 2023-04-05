import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  const [quantity, setQuantity] = useState(0);
  const newPrice = price.replace('.', ',');
  console.log(quantity);
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
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${id}` }
        onChange={ ({ target: { value } }) => setQuantity(Number(value)) }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        value="-"
        onClick={ () => setQuantity(quantity - 1) }
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
