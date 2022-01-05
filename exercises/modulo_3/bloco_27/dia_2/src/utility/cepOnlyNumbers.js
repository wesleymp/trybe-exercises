const cepOnlyNumbers = (cep) => {
  const cepSplit = cep.split('-');
  return cepSplit[0] + cepSplit[1];
};

module.exports = {
  cepOnlyNumbers,
};