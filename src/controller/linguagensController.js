const linguagens = require('../model/acervoLinguagens.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(linguagens);
};

module.exports = { getAll };