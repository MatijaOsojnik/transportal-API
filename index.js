//jshint esversion:6
const express = require("express");
const _ = require("lodash");
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require('morgan');

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(express.urlencoded({
    extended: true
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(cors())

require('./routes')(app);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});