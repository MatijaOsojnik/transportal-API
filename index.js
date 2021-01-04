require('dotenv').config();

const express = require("express");
const _ = require("lodash");
const mongoose = require("mongoose");
const cors = require('cors')
const passport = require('passport')
const passportMiddleware = require('./middleware/passport')

const config = require('./config/config')

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

const user = require('./routes/user')
const transport = require('./routes/transport')
const color = require('./routes/color')
const car = require('./routes/car')
const city = require('./routes/city')
const model = require('./routes/model')
const brand = require('./routes/brand')

app.use("/user", user);
app.use("/transport", transport)
app.use("/color", color)
app.use("/car", car)
app.use("/city", city)
app.use("/model", model)
app.use("/brand", brand)

app.listen(3000, () => {
    console.log("Server started on port 3000");
});