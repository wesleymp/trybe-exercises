const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.age === age);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      }
      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
};

const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
    .then(response => response);
};

describe('Testanto promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurado', () => {
    it('Retorna o objeto animal', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(1)).resolves.toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    });
  });

  describe('Quando não existe o animal com a idade procurado', () => {
    it('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(3)).rejects.toBe('Nenhum animal com essa idade!');
    });
  });
});
