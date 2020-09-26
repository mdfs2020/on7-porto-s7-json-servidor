const express = require('express');
const router = express.Router();
const controller = require('../controller/escritoresLatinoAmericanosController')

router.get("/", controller.getAll);
router.get("/escritoresLatinoAmericanos", controller.getAll);

module.exports = router;