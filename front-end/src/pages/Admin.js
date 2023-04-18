import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import { postSales } from '../services/apiRequest';

export default function Admin() {
  /* const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
*/
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ defaultValues: { name: '', email: '', password: '', role: 'customer' } });

  const handleLoginAdmin = async (form) => {
    console.log(form, 'AQUI');
    const { token } = JSON.parse(localStorage.getItem('user'));
    console.log(token);
    const { name, email, password, role } = form;
    const body = {
      name,
      email,
      password,
      role,
      token,
    };
    console.log(body, 'BODY');
    await postSales('/admin/user', body);
  };
  console.log(register, 'REGISTER');
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
    </div>
  );
}
