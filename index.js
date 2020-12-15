require('dotenv').config();

const express = require("express");
const _ = require("lodash");
const mongoose = require("mongoose");
const cors = require('cors')
const passport = require('passport')
const passportMiddleware = require('./middleware/passport')

const config = require('./config/config')

const user = require('./routes/user')

mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
});


const app = express();
app.use(cors())

app.use(passport.initialize())
passport.use(passportMiddleware)

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use("/user", user);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});