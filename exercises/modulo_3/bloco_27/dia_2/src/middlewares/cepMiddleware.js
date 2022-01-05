const { validateCEP, blank } = require("../utility/validateCEP");

const valideCEP = (req, res, next) => {
  const { cep } = req.params;

  if (!validateCEP(cep)) return res.status(400).json({
    "error": { "code": "invalidData", "message": "CEP inválido" },
  });

  next();
};

const valideteCreateCEP = (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  if (
    !validateCEP(cep) ||
    !blank(cep) ||
    !blank(logradouro) ||
    !blank(bairro) ||
    !blank(localidade) ||
    !blank(uf)
  ) {
    return res.status(400).json({
      "error": { "code": "invalidData", "message": "<mensagem do Joi>" },
    });
  }

  next();
}

module.exports = {
  valideCEP,
  valideteCreateCEP,
};