import React, { useState } from 'react';

export default function FormCheckout() {
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');

  return (
    <section>
      <select data-testid="customer_checkout__select-seller">
        <option value="">exemplo</option>
      </select>
      <input
        data-testid="customer_checkout__input-address"
        id="endereco"
        type="text"
        value={ endereco }
      />
      <input
        data-testid="customer_checkout__input-address-number"
        type="number"
        value={ numero }
      />
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
      >
        FINALIZAR PEDIDO
      </button>
    </section>
  );
}
