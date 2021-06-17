let skills = ['JavaScript', 'HTML', 'CSS', 'NODEjs', 'REACT'];

const addPalavra = (palavra) => {
  let stringDeterminada = 'Tryber x aqui!';
  return stringDeterminada.replace('x', palavra);
}

const concatenarSkills = () => {
  skills.sort();
  return `${addPalavra('Bebeto')} Minhas cinco principais habilidades são: ${skills}`;
}

console.log(concatenarSkills());