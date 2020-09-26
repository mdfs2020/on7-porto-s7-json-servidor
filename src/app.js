const express = require('express');
const app = express();

// importar os arquivos de rota

const index = require('./route/index');
const cafeterias = require('./route/cafeteriasRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/cafeterias', cafeterias);

module.exports = app;