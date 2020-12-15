const express = require("express");
const {
    check
} = require("express-validator");
const router = express.Router();

const TransportController = require('../controllers/TransportController')

router.get("/", TransportController.all)

router.post("/", TransportController.post)

// router.put("/", TransportController.put)

// router.delete("/",  TransportController.delete)

module.exports = router;