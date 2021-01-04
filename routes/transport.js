const express = require("express");
const {
    check
} = require("express-validator");
const router = express.Router();
const passport = require('passport')

const TransportController = require('../controllers/TransportController')

router.get("/", TransportController.all)

router.post("/", passport.authenticate('jwt', {session: false}), TransportController.post)

// router.put("/", TransportController.put)

// router.delete("/",  TransportController.delete)

module.exports = router;