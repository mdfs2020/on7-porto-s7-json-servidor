const literatura = require('../model/acervoLiterario.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(literatura);
};

module.exports = { getAll };