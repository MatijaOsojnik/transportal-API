const express = require("express");
const {
    check
} = require("express-validator");
const router = express.Router();
  const  User = require('../models/User')

const AuthenticationController = require('../controllers/AuthenticationController')
const UserController = require('../controllers/UserController')

const passport = require('passport')

// function authorized(req, res, next) {
//     passport.authenticate('jwt', {
//         session: false,
//     }, async (error, token) => {
//         if (error || !token) {
//             res.status(401).json({
//                 message: 'Unauthorized'
//             });
//         }
//         try {
//             const user = await User.findOne({
//                 where: {
//                     id: token.id
//                 },
//             });
//             req.user = user;
//         } catch (error) {
//             next(error);
//         }
//         next();
//     })(req, res, next);
// }


router.post(
    "/register",
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

router.post(
        "/login",
        [
            check("email", "Please enter a valid email").isEmail(),
            check("password", "Please enter a valid password").isLength({
                min: 6
            })
        ],
        AuthenticationController.login
)

router.get("/me", passport.authenticate("jwt", {session: false}), UserController.getUser);
// router.get("/me", passport.authenticate("jwt", {session: false}), (req, res) => {
//     res.send("HI!")
// })

module.exports = router;