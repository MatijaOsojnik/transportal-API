const express = require("express");
const {
    check
} = require("express-validator");
const router = express.Router();
const passport = require('passport')

const TransportController = require('../controllers/TransportController')

router.get("/", TransportController.all)

router.get("/:id", TransportController.single)

router.post("/", passport.authenticate("jwt", {
    session: false
}), TransportController.post)

router.put("/:id", TransportController.put)

router.delete("/:id",  TransportController.delete)

module.exports = router;