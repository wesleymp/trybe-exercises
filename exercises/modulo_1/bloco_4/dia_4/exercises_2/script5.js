function repeteNumero(listaNumero) {
  let contaNumero = 0;
  let contaRepeticao = 0;
  let indexNumero = 0;

  for (let index = 0; index < listaNumero.length; index += 1) {
    for (let index2 = 0; index2 < listaNumero.length; index2 += 1) {
      if (listaNumero[index] === listaNumero[index2]) {
        contaNumero += 1;
      }
    }

    console.log("contador: ", contaNumero);

    if (contaNumero > contaRepeticao) {
      contaRepeticao = contaNumero;
      indexNumero = index;
    }
    contaNumero = 0;
  }

  return listaNumero[indexNumero];
}

let numeros = [2, 3, 2, 5, 8, 2, 3];
console.log(repeteNumero(numeros));
