const express = require('express');
const app = express();

// importar os arquivos de rota

const index = require('./route/index');
const musica = require('./route/musicalRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/musical', musica);

module.exports = app;