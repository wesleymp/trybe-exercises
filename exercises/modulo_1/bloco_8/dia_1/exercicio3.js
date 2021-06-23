const rightAnswers =  ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const prova = (respostasCorretas, respostasEstudante, funcChecarReposta) => {
  let contador = 0;
  for (let index = 0; index < respostasCorretas.length; index += 1) {
    const gabarito = funcChecarReposta(respostasEstudante[index], respostasCorretas[index]);
    contador += gabarito;
  }
  return `Total de respostas ${contador} corretas`;
}

const checaRespostas = (resCorretas, resEstutante) => {
  if (resCorretas === resEstutante) return 1;
  if (resEstutante === 'N.A') return 0;
  return -0.5;
}

console.log(prova(rightAnswers, studentAnswers, checaRespostas));
