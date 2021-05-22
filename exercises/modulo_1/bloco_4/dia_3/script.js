let n = 4;
let simbolo = '';

if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    simbolo += "*";
  }
  for (let index = 0; index < n; index += 1) {
    console.log(simbolo);
  }
}else{
  console.log("Número deve ser maior que 1");
}
