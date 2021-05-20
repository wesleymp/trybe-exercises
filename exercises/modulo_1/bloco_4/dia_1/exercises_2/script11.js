let salario = 3000.00;
let salarioINNS;
let SalarioIR;

console.log("Resultado:");

// INSS
if (salario <= 1556.94) {
  let aliquota = 8;
  salarioINNS = salario * aliquota/100;

}else if (salario >= 1556.95 && salario <= 2594.92) {
  let aliquota = 9;
  salarioINNS = salario - (salario * aliquota/100);

}else if (salario >= 2594.93 && salario <= 5189.82) {
  let aliquota = 11;
  salarioINNS = salario - (salario * aliquota/100);

}else if (salario > 5189.82) {
  salarioINNS = salario - 570.88;
}

// Imposto de Renda
if (salarioINNS >= 1903.99 && salarioINNS <= 2826.65) {
  let aliquota = 7.5;
  SalarioIR = (salarioINNS * aliquota/100) - 142.80;

}else if (salarioINNS >= 2826.66 && salarioINNS <= 3751.05) {
  let aliquota = 15;
  SalarioIR = (salarioINNS * aliquota/100) - 354.80;

}else if (salarioINNS >= 3751.06 && salarioINNS <= 4664.68) {
  let aliquota = 22.5;
  SalarioIR = (salarioINNS * aliquota/100) - 636.13;

}else if (salarioINNS > 4664.68) {
  let aliquota = 27.5;
  SalarioIR = (salarioINNS * aliquota/100) - 869.36;
}

console.log(salarioINNS - SalarioIR);
