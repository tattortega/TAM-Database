const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middlewares
app.use(bodyParser.json());

//Rutas
app.use(require('./src/routes/datosbiologicos.route'));

module.exports = app;