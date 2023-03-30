const crypto = require('crypto');
const User = require('../../database/models/user.model');

const login = async (body) => {
  const { email, password } = body;
  const hashedPassword = crypto
    .createHash('md5')
    .update(password)
    .digest('hex');
  const result = await User.findOne({
    where: { email, password: hashedPassword },
  });
  if (!result) return { type: 'error', message: 'User not found' };
  const { dataValues } = result;
  return { type: null, message: dataValues };
};

module.exports = login;

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
