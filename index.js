//jshint esversion:6
const express = require("express");
const _ = require("lodash");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.listen(3000, () => {
    console.log("Server started on port 3000");
});