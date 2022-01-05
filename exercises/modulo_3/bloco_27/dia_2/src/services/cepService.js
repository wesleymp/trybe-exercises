const cepModels = require('../models/cepModels');
const { cepOnlyNumbers } = require('../utility/cepOnlyNumbers');

const getCEPByID = async (cep) => {
  const cepData = await cepModels.getCEPByID(cepOnlyNumbers(cep));

  return cepData;
};

const createCEP = async (cep, logradouro, bairro, localidade, uf) => {
  const notExistCEP = await cepModels.getCEPByID(cepOnlyNumbers(cep));

  if (notExistCEP) return false;

  const cepData = await cepModels.createCEP(cepOnlyNumbers(cep), logradouro, bairro, localidade, uf);

  return cepData;
};

module.exports = {
  getCEPByID,
  createCEP,
  cepOnlyNumbers,
};