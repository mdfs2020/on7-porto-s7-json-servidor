const turismo = require('../model/acervoTuristico.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(turismo);
};

module.exports = { getAll };