let n = 5;
let simbolo = '';
let comparaNum = n;

for (let indexLinha = 1; indexLinha <= n; indexLinha += 1) {
  for (let indexColuna = 1; indexColuna <= n; indexColuna += 1) {
      if (indexColuna < comparaNum) {
         simbolo += ' ';
      }else{
         simbolo += '*';
      }
  }
  console.log(simbolo);
  simbolo = '';
  comparaNum -= 1;
}
