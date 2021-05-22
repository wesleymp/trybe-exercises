let numero = 7;
let checagem = 1;

for (let index = 2; index <= numero; index += 1) {
  if (numero % index === 0) {
    checagem += 1;
  }
}

if (checagem === 2) {
  console.log(`O número ${numero} é primo.`);
}else {
  console.log(`O número ${numero} não é primo.`);
}
