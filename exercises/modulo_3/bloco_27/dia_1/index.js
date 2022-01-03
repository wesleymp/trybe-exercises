const express = require('express');
const bodyParser = require('body-parser');

const validate = require('./middlewares/createMiddleware');
const userModel = require('./models/userModel');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/user', validate, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const create = await userModel.create(firstName, lastName, email, password);

  return res.status(201).json({id: create.insertedId, firstName, lastName, email, password });
});

app.get('/user', async (_req, res) => {
  const findAllUsers = await userModel.findAllUsers();

  return res.status(200).json(findAllUsers);
});

app.get('/user/:id', async (req, res) => {
  const id = req.params;
  const user = await userModel.findUser(id);

  if (!user) {
    return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado",
    });
  }

  return res.status(200).json(user);
});

app.listen(PORT, console.log(`Running PORT ${PORT}`));
