const express = require("express");
const {
    check
} = require("express-validator");
const router = express.Router();

const ModelController = require('../controllers/ModelController')

router.get("/", ModelController.all)

router.post("/", ModelController.post)

// router.put("/", CityController.put)

// router.delete("/",  CityController.delete)

module.exports = router;