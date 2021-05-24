function palindromo(palavra) {

  let primeiraPalavraPalindromo = '';
  let segundaPalavraPalindromo = '';

  for (let index = 0; index < palavra.length; index += 1) {
    primeiraPalavraPalindromo += palavra[index];
  }

  for (let index = palavra.length; index > 0; index -= 1) {
    segundaPalavraPalindromo += palavra[index-1];
  }

  if (primeiraPalavraPalindromo === segundaPalavraPalindromo) {
    return true;
  }else{
    return false;
  }

}

console.log(palindromo("arara"));
