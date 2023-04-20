import React from 'react';
import Header from './Header';

export default function gerenciamentoAdm() {
  return (
    <div>
      <Header />
      <form>
        <input type="text" data-testid="admin_manage__input-name" />
        <input type="email" data-testid="admin_manage__input-email" />
        <input type="password" data-testid="admin_manage__input-password" />
        <select data-testid="admin_manage__select-role">
          <option>Vendedor</option>
        </select>
        <button type="button" data-testid="admin_manage__button-register">
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
