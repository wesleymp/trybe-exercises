const sum = require('./exercicio1.js');

describe('Somando Valores', () => {
  test('parameters must be numbers', () => {
    expect(() => { sum('a', 1) }).toThrow();
  });

  test('parameters must be numbers', () => {
    expect(() => { sum('a', '1') }).toThrow();
  });

  test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});