function maioValor(listaValores) {
  let MaiorValor = 0;
  let indeceMaiorValor = 0;

  for (let index = 0; index < listaValores.length; index += 1) {
    if (listaValores[index] > MaiorValor) {
      MaiorValor = listaValores[index];
      indeceMaiorValor = index;
    }
  }

  return indeceMaiorValor;
}

let valores = [2, 3, 6, 7, 10, 1];

console.log(maioValor(valores));
