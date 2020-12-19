const express = require("express");
const {
    check
} = require("express-validator");
const router = express.Router();

const BrandController = require('../controllers/BrandController')

router.get("/", BrandController.all)

router.get("/single", BrandController.single)

router.post("/", BrandController.post)

// router.put("/", CityController.put)

// router.delete("/",  CityController.delete)

module.exports = router;