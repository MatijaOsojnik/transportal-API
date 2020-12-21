const express = require("express");
const {
    check
} = require("express-validator");
const router = express.Router();

const CarController = require('../controllers/CarController')

router.get("/", CarController.all)

router.post("/", CarController.post)

// router.put("/", CarController.put)

// router.delete("/",  CarController.delete)

module.exports = router;