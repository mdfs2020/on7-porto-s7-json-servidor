const escritores = require('../model/acervoEscritoresLatinoAmericanos.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(escritores);
};

module.exports = { getAll };