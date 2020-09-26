const express = require('express');
const router = express.Router();
const controller = require('../controller/literarioController')

router.get("/", controller.getAll);
router.get("/literario", controller.getAll);

module.exports = router;