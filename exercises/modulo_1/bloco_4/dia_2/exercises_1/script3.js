let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  somar = somar + numbers[index];
}

console.log(`A média aritimética é: ${somar/numbers.length}`);
