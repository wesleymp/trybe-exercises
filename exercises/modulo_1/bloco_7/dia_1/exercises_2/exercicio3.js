const contador = document.querySelector('#contador');

const iniciaContador = (event) => {
  const resultadoContador = document.querySelector('#resultado-contador');
  resultadoContador.innerHTML = parseInt(resultadoContador.textContent) + 1;
}
contador.addEventListener('click', iniciaContador);
