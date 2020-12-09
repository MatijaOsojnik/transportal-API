const express = require("express");
const {
    check
} = require("express-validator");
const router = express.Router();

const AuthenticationController = require('../controllers/AuthenticationController')

router.post(
    "/signup",
    [
        check("name", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("surname", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    AuthenticationController.register
);

module.exports = router;