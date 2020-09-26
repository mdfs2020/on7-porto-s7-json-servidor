const express = require('express');
const router = express.Router();
const controller = require('../controller/heroisController')

router.get("/", controller.getAll);
router.get("/herois", controller.getAll);

module.exports = router;