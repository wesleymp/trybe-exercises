const newEmployees = (nomePessoa) => {
  const employees = {
    id1: nomePessoa('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nomePessoa('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nomePessoa('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const nomeEmail = (nomeCompleto) => {
  const nomeE = {
    nome: nomeCompleto,
    email: `${nomeCompleto.replace(' ', '').toLowerCase()}@trybe.com`,
  }
  return nomeE;
}

console.log(newEmployees(nomeEmail));
