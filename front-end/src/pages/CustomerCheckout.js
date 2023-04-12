import React from 'react';
import Header from '../components/Header';
import TableCheckout from '../components/TableCheckout';
import FormCheckout from '../components/FormCheckout';

export default function CustomerCheckout() {
  return (
    <div>
      <Header showGerenciar={ false } />
      <TableCheckout />
      <FormCheckout />
    </div>
  );
}
