let n = 5;
let simbolo = '';
let centroBase = (n+1) / 2;
let esquerda = centroBase;
let direita = centroBase;

for (let indexLinha = centroBase; indexLinha <= n; indexLinha += 1) {
  for (let indexColuna = 1; indexColuna <= n; indexColuna += 1) {
    if (indexColuna >= esquerda && indexColuna <= direita) {
      simbolo += '*';
    }else {
      simbolo += ' ';
    }
  }

  console.log(simbolo);
  simbolo = '';
  esquerda -= 1;
  direita += 1;
}
