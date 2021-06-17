const fatoria = (numeuro) => {
  let resultFatoria = 1;
  console.log((numeuro < 0) ? 'Ensira um número positivo!' : `Resultado de ${numeuro}!`);
  for (let index = 1; index <= numeuro; index += 1) {
    resultFatoria *= index;
    console.log(`${index} x ${index+1} = ${resultFatoria}`);
  }
}

fatoria(4);
