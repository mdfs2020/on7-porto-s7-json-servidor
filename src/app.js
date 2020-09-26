const express = require('express');
const app = express();

// importar os arquivos de rota

const index = require('./route/index');
const escritores = require('./route/escritoresLatinoAmericanosRoute');


app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/escritoresLatinoAmericanos', escritores);

module.exports = app;