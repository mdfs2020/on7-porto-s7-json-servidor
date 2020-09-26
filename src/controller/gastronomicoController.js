const gastronomia = require('../model/acervoGastronomico.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(gastronomia);
};

module.exports = { getAll };