const express = require('express');
const app = express();

// importar os arquivos de rota

const index = require('./route/index');
const linguagens = require('./route/linguagensRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/linguagens', linguagens);

module.exports = app;