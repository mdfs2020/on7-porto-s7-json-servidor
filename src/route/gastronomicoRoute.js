const express = require('express');
const router = express.Router();
const controller = require('../controller/gastronomicoController')

router.get("/", controller.getAll);
router.get("/gastronomico", controller.getAll);

module.exports = router;