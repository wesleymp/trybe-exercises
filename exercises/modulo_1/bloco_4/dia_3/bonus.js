let n = 7;
let simbolo = '';
let metade = (n + 1) / 2;
let direita = metade;
let esquerda = metade;

for (let indexLinha = metade; indexLinha <= n; indexLinha += 1) {
  for (let indexColuna = 1; indexColuna <= n; indexColuna += 1) {
    if (indexColuna === direita || indexColuna === esquerda || indexLinha === n) {
      simbolo += '*';
    }else {
      simbolo += ' ';
    }
  }

  console.log(simbolo);
  simbolo = '';
  direita += 1;
  esquerda -= 1;
}