const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('1 - O retorno do telefonema', () => {
  test('atende', () => {
    // Código com .then
    /* expect.assertions(1);
    answerPhone(true).then((response) => {
      expect(response).toEqual('Oi!');
    }); */

    // código com async/await
    /* const response = await answerPhone(true);
    expect(response).toBe('Oi!'); */

    // Código com resolves;
    expect.assertions(1);
    expect(answerPhone(true)).resolves.toBe('Oi!');
  });

  test('ocupado', async () => {
    // Código com await.
    expect.assertions(1);
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error.message).toBe('Infelizmente não podemos atender...');
    }
  });
});
