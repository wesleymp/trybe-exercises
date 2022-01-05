require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const { pingController } = require('./src/controllers/pingController');
const { valideCEP, valideteCreateCEP } = require('./src/middlewares/cepMiddleware');
const { getCEPByID, createCEP } = require('./src/controllers/cepController');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get('/ping', pingController);
app.get('/cep/:cep', valideCEP, getCEPByID);

app.post('/cep', valideteCreateCEP, createCEP);

app.listen(PORT, () => console.log(`Running PORT ${PORT}`));
