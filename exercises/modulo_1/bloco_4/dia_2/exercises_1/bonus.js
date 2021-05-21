/**
 * Site usado para o entendiomento do exercício
 * http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/
 */

let number = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
//            0   1   2    3     4    5    6    7   8    9

for (let index = 1; index < number.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (number[index] < number[index2]) {
      let position = number[index];
      number[index] = number[index2];
      number[index2] = position;
    }
  }
}

console.log(number);
