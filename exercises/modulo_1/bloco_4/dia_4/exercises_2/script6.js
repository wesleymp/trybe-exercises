function retornaSoma(numero){
  let somaNumero = 0;

  for (let index = 1; index <= numero; index += 1) {
    somaNumero += index;
  }

  return somaNumero;
}

console.log(retornaSoma(5));
