import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import { reqLogin } from '../services/apiRequest';

export default function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: 'onBlur' });

  const handleLoginAdmin = async () => {
    const body = {
      name,
      email,
      password,
      role,
    };
    await reqLogin('/admin/user', body);
  };

  return (
    <div>
      <Header />
      <form onSubmit={ handleSubmit(handleLoginAdmin) }>
        <input
          type="text"
          data-testid="admin_manage__input-name"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          { ...register('name', {
            minLength: {
              value: 12,
              message: 'O campo usuário deve conter no mínimo 12 caracteres',
            },
            required: true,
          }) }
        />
        <input
          type="email"
          data-testid="admin_manage__input-email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          { ...register('email', {
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Endereço de email inválido',
            },
            required: true,
          }) }
        />
        <input
          type="password"
          data-testid="admin_manage__input-password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          { ...register('password', {
            minLength: {
              value: 6,
              message: 'O campo senha deve ter no mínimo 6 caracteres',
            },
            required: true,
          }) }
        />
        <select
          data-testid="admin_manage__select-role"
          onChange={ (e) => setRole(e.target.value) }
          { ...register('role', {
            required: true,

          }) }
          defaultValue="customer"
        >
          <option value="customer">Customer</option>
          <option value="seller">Vendedor</option>
          <option value="adin">Adiministrador</option>
        </select>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ !isValid }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
