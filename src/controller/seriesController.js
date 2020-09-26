const series = require('../model/acervoSeries.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(series);
};

module.exports = { getAll };