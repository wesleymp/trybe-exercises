const connection = require('../models/connection');

const getCEPByID = async (cep) => {
  const [sql] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?', [cep],
  );

  if (sql.length === 0) return false;

  return sql[0];
}

const createCEP = async (cep, logradouro, bairro, localidade, uf) => {
  const sql = await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf],
  );

  return sql;
};

module.exports = {
  getCEPByID,
  createCEP,
};