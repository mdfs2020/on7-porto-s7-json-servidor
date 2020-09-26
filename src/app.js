const express = require('express');
const app = express();

// importar os arquivos de rota

const index = require('./route/index');
const herois = require('./route/heroisRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/herois', herois);

module.exports = app;