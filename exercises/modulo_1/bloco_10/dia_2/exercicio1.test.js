const uppercase = require('./exercicio1.js');

describe('Trasformar string em maiusculo', () => {
  it('wesley para WESLEY', done => {
    uppercase('wesley', (callback) => {
      expect(callback).toBe('WESLEY');
      done();
    });
  });
});
