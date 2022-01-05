require('dotenv').config();

const { createPool } = require('mysql2/promise');

const connection = createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
});

module.exports = connection;
