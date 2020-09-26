const cafeterias = require('../model/acervoCafeterias.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(cafeterias);
};

module.exports = { getAll };