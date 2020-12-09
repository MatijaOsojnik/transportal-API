require('dotenv').config();

const express = require("express");
const _ = require("lodash");
const mongoose = require("mongoose");

const user = require('./routes/user')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
});

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use("/user", user);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});