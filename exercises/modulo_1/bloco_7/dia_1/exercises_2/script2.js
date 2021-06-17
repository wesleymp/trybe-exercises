const longestWord = (frase) => {
  let listaFrase = frase.split(' ');
  let guardaTamanho;
  for (let index = 0; index < listaFrase.length; index += 1) {
    for (let index2 = 0; index2 < listaFrase.length; index2 += 1) {
      if (listaFrase[index].length < listaFrase[index2].length) {
        guardaTamanho = listaFrase[index2];
        listaFrase[index] = listaFrase[index2];
        listaFrase[index2] = guardaTamanho;
      }
    }
  }
  console.log(`A maior palavra de "${frase}" é "${listaFrase[0]}" com ${listaFrase[0].length} caracteres.`);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
