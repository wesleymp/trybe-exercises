const sorteio = (numeroAposta, checkAposta) => {
  let randNumber = Math.ceil(Math.random() * 5);
  return checkAposta(numeroAposta, randNumber);
}

const checarAposta = (numeroAposta, numeroSorteio) => {
  return (numeroAposta === numeroSorteio) ?
   `Parabéns você ganhou. Número do sorteio: ${numeroSorteio}` :
   `Tente novamente. Número do sorteio: ${numeroSorteio}`;
}

console.log(sorteio(2, checarAposta));
