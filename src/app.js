const express = require('express');
const app = express();

// importar os arquivos de rota

const index = require('./route/index');
const gastronomia = require('./route/gastronomicoRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/gastronomico', gastronomia);

module.exports = app;