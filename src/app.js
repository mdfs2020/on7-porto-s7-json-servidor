const express = require('express');
const app = express();

// importar os arquivos de rota

const index = require('./route/index');
const carro = require('./route/retroCarsRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/retroCars', carro);

module.exports = app;