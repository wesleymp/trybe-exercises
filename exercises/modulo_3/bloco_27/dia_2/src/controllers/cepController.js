const cepService = require('../services/cepService');

const getCEPByID = async (req, res) => {
  const { cep } = req.params;

  const cepData = await cepService.getCEPByID(cep);

  if (!cepData) return res.status(404).json({
    "error": { "code": "notFound", "message": "CEP não encontrado" },
  });

  cepData.cep = cep;

  console.log(cepData);

  return res.status(200).json(cepData);
};

const createCEP = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const cepData = await cepService.createCEP(cep, logradouro, bairro, localidade, uf);

  if (!cepData) return res.status(409).json({
    "error": { "code": "alreadyExists", "message": "CEP já existente" },
  });

  return res.status(201).json({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });
};

module.exports = {
  getCEPByID,
  createCEP,
}
