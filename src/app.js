const express = require('express');
const app = express();

// importar os arquivos de rota

const index = require('./route/index');
const literatura = require('./route/literarioRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/literario', literatura);

module.exports = app;