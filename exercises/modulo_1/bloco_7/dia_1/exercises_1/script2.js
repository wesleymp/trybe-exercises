const oddsAndEvens = [13, 3, 4, 10, 7, 2];
let guardaIndex;
for (let index = 0; index < oddsAndEvens.length; index += 1) {
  for (let index2 = 0; index2 < oddsAndEvens.length; index2 += 1) {
    if (oddsAndEvens[index] < oddsAndEvens[index2]) {
      guardaIndex = oddsAndEvens[index];
      oddsAndEvens[index] = oddsAndEvens[index2];
      oddsAndEvens[index2] = guardaIndex;
    }
  }
}

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
