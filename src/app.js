const express = require('express');
const app = express();

// importar os arquivos de rota

const index = require('./route/index');
const series = require('./route/seriesRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/series', series);

module.exports = app;