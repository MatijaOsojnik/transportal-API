const express = require("express");
const {
    check
} = require("express-validator");
const router = express.Router();

const ColorController = require('../controllers/ColorController')

router.get("/", ColorController.all)

router.post("/", ColorController.post)

// router.put("/", ColorController.put)

// router.delete("/",  ColorController.delete)

module.exports = router;