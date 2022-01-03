const express = require('express');
const bodyParser = require('body-parser');

const validate = require('./middlewares/createMiddleware');
const userModel = require('./models/userModel');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/user', validate, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  await userModel.create(firstName, lastName, email, password);

  return res.status(201).json({ firstName, lastName, email, password });
});



app.listen(PORT, console.log(`Running PORT ${PORT}`));
