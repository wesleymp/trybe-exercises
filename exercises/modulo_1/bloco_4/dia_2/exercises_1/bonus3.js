let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplication = 1;
let newNumbers = [];

for (let index = 0; index < number.length; index += 1) {
  multiplication = number[index] * number[index+1];
  if (number[index+1] == null) {
    newNumbers.push(number[index]*2);
  }else{
    newNumbers.push(multiplication);
  }
}

console.log(newNumbers);
