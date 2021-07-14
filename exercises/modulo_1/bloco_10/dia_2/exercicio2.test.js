const getUserName = require('./exercicio2.js');

describe('Encontrar Usuário', () => {
  it('getUserName(4) retorna Mark', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toEqual('Mark');
  });

  it('getUserName(1) retornar erro', async () => {
    expect.assertions(1);
    await expect(getUserName(1)).rejects.toEqual({ error: 'User with 1 not found.' });
  });
});
