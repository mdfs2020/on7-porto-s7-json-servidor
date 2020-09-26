const carros = require('../model/acervoRetroCars.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(carros);
};

module.exports = { getAll };