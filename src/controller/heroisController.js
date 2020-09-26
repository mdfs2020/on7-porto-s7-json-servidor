const herois = require('../model/acervoHerois.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(herois);
};

module.exports = { getAll };