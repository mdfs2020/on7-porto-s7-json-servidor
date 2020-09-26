const express = require('express');
const router = express.Router();
const controller = require('../controller/retroCarsController')

router.get("/", controller.getAll);
router.get("/retroCars", controller.getAll);

module.exports = router;