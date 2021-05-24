function maioValor(listaValores) {
  let MaiorValor = 0;
  let indiceMaiorValor = 0;

  for (let index = 0; index < listaValores.length; index += 1) {
    if (listaValores[index] > MaiorValor) {
      MaiorValor = listaValores[index];
      indiceMaiorValor = index;
    }
  }

  let menorValor = MaiorValor;
  let indiceMenorValor = 0;

  for (let index = 0; index < listaValores.length; index += 1) {
    if (listaValores[index] < menorValor) {
      menorValor = listaValores[index];
      indiceMenorValor = index;
    }
  }

  return indiceMenorValor;
}

let valores = [2, 4, 6, 7, 10, 0, -3];

console.log(maioValor(valores));
