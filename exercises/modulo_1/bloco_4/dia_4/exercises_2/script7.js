function retornaString(palavraInicial, palavraFinal) {
  let tamanhoMeioPalavraInicial = palavraInicial.length - palavraFinal.length;
  let armazenaPalavraInicial = '';
  let palavraFinalPertencePalavraInicial = '';

  for (let index = tamanhoMeioPalavraInicial; index < palavraInicial.length; index += 1) {
    armazenaPalavraInicial += palavraInicial[index];
  }

  if (palavraFinal.length < tamanhoMeioPalavraInicial && armazenaPalavraInicial === palavraFinal) {
    palavraFinalPertencePalavraInicial = true;
  }else {
    palavraFinalPertencePalavraInicial = false;
  }

  return palavraFinalPertencePalavraInicial;
}

console.log(retornaString("trybe", "be"));
