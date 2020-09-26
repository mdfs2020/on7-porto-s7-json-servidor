const express = require('express');
const router = express.Router();
const controller = require('../controller/turisticoController')

router.get("/", controller.getAll);
router.get("/turistico", controller.getAll);

module.exports = router;