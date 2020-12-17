const express = require("express");
const {
    check
} = require("express-validator");
const router = express.Router();

const CityController = require('../controllers/CityController')

router.get("/", CityController.all)

router.post("/", CityController.post)

// router.put("/", CityController.put)

// router.delete("/",  CityController.delete)

module.exports = router;