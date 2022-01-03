const { ObjectId } = require('mongodb');
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

const findAllUsers = async () => {
  try {
    const conn = await connect();
    const query = await conn.collection('users').find().toArray();

    return query;
  } catch (error) {
    console.log(error.message);
  }
};

const findUser = async (id) => {
  try {
    const conn = await connect();
    const query = await conn.collection('users').findOne(new ObjectId(id));

    if (!query) {
      return false;
    }

    return query;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  create,
  findAllUsers,
  findUser,
};