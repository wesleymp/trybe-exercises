const validateCEP = (cep) => {
  if (cep.length !== 9) return false;

  const rex = /\d{5}-?\d{3}/;

  return rex.test(cep);
};

const blank = (values) => {
  if (!values) return false;

  return true;
}

module.exports = {
  validateCEP,
  blank,
};