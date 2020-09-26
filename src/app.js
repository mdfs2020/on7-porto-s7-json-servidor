const express = require('express');
const app = express();

// importar os arquivos de rota

const index = require('./route/index');
const turismo = require('./route/turisticoRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/turistico', turismo);

module.exports = app;