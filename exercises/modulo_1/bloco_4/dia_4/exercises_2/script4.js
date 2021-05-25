function nomePessoas(listaNome) {
  let tamanhoNome = 0;
  let maiorNome = '';

  for (let index = 0; index < listaNome.length; index += 1) {
    if (listaNome[index].length > tamanhoNome) {
      tamanhoNome = listaNome[index].length;
      maiorNome = listaNome[index];
    }
  }

  return maiorNome;
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(nomePessoas(nomes));
