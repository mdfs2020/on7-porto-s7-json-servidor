const express = require('express');
const router = express.Router();
const controller = require('../controller/musicalController')

router.get("/", controller.getAll);
router.get("/musical", controller.getAll);

module.exports = router;