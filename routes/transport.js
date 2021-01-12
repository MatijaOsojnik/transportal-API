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

router.put("/:id", passport.authenticate("jwt", {
    session: false
}), TransportController.put)

router.put("/user/:id", passport.authenticate("jwt", {
    session: false
}), TransportController.joinSingle)

router.delete("/:id", passport.authenticate("jwt", {
    session: false
}), TransportController.delete)

module.exports = router;