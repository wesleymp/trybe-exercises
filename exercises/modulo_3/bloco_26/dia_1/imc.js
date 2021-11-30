const readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat("Qual o seu peso? ");
const altura = readlineSync.question("Qual a sua altura? ");

const calcIMC = () => tableIMC(peso / (altura ** 2));

const tableIMC = (imcValue) => {
  imcValue < 18.5 && "Abaixo do peso (magreza)";

  if (imcValue >= 18.5 && imcValue <= 24.9) {
    return "Peso normal";
  }

  if (imcValue >= 25 && imcValue <= 29.9) {
    return "Acima do peso (sobrepeso)";
  }

  if (imcValue >= 30 && imcValue <= 34.9) {
    return "Obesidade grau I";
  }

  if (imcValue >= 35 && imcValue <= 39.9) {
    return "Obesidade grau II";
  }

  imcValue >= 40 && "Obesidade graus III e IV";
};

console.log(calcIMC());
