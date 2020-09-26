const express = require('express');
const router = express.Router();
const controller = require('../controller/cafeteriasController')

router.get("/", controller.getAll);
router.get("/cafeterias", controller.getAll);

module.exports = router;