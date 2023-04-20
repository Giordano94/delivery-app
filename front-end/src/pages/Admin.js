import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import { postSales } from '../services/apiRequest';

export default function Admin() {
  const [isRegister, setIsRegister] = useState(false);
  /* const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
*/
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ defaultValues: { name: '', email: '', password: '', role: 'customer' } });

  const handleLoginAdmin = async (form) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const { name, email, password, role } = form;
    const body = {
      name,
      email,
      password,
      role,
      token,
    };
    try {
      await postSales('/admin/user', body);
      // alert('Cadastro realizado com sucesso');
    } catch {
      setIsRegister(true);
      // if (error.response && error.response.data && error
      //   .response.data.error === 'duplicated_user') {
      //   alert('O email informado já está cadastrado. Por favor, tente outro email');
      // } else {
      //   alert('Desculpe, ocorreu um erro em seu cadastro, tente novamente mais tarde');
      // }
    }
  };
  return (
    <div>
      <Header />
      <form onSubmit={ handleSubmit(handleLoginAdmin) }>
        <input
          data-testid="admin_manage__input-name"
          { ...register('name', {
            minLength: {
              value: 12,
              message: 'O campo usuário deve conter no mínimo 12 caracteres',
            },
            required: true,
          }) }
        />
        <input
          data-testid="admin_manage__input-email"
          { ...register('email', {
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Endereço de email inválido',
            },
            required: true,
          }) }
        />
        <input
          data-testid="admin_manage__input-password"
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
          { ...register('role', {
            required: true,

          }) }
          defaultValue="customer"
        >
          <option value="customer">customer</option>
          <option value="seller">seller</option>
          <option value="administrator">administrator</option>
        </select>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ !isValid }
        >
          CADASTRAR
        </button>
      </form>
      {isRegister && (
        <h2 data-testid="admin_manage__element-invalid-register">
          O email ou nome informado já está cadastrado. Por favor, verifique seus dados!
        </h2>
      )}
    </div>
  );
}
