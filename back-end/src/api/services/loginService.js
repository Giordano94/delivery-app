const md5 = require('md5');
const { Users } = require('../../database/models');
const { JwtToken } = require('../../utils/JwtToken');

const login = async (email, password) => {
  const loginValidate = await Users.findOne({ where: { email } });
  if (!loginValidate || loginValidate.password !== md5(password)) {
    return null;
  }
  const token = JwtToken(loginValidate);

  return {
    name: loginValidate.name,
    email: loginValidate.email,
    role: loginValidate.role,
    token,
  };
};

module.exports = { login };

/* 8 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro com dados mal formatados
Observações técnicas

A senha recebe qualquer tipo de caractere;
Aqui, os critérios para considerar os dados mal formatados são:
Nome completo com número de caracteres menor que 12.
Email incompleto, fora de um padrão comum: <email>@<domínioPrincipal>.<domínioGenérico>;
Senha com número de caracteres menor que 6.
O que será avaliado
9 - Desenvolva a tela de registro de maneira que ela possibilite cadastrar com dados válidos
Observações técnicas

Sua página deve ser capaz de cadastrar pessoas usuárias com dados válidos:

Note que a senha deve ser armazenada no banco como uma hash md5. A tradução deve ocorrer na API;
É possível utilizar bibliotecas de terceiros como a md5 ou a nativa crypto, para conversão de valores para md5.
O que será avaliado
10 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro de um usuário já existente
Observações técnicas

Sua página deve impedir o cadastro de pessoas com o mesmo Nome ou E-mail.
O que será avaliado */
