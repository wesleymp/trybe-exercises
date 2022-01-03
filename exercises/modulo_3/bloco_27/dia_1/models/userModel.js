const connect = require('./connect');

const create = async (firstName, lastName, email, password) => {
  try {
    const conn = await connect();
    const query = await conn.collection('users').insertOne({ firstName, lastName, email, password });

    return query;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  create,
};