const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TransportSchema = new mongoose.Schema({
    departure_time: {
        type: Date,
        required: true,
    },
    departure_city: {
        type: mongoose.Types.ObjectId,
        ref: 'City',
        required: true
    },
    arrival_time: {
        type: Date,
        required: true,
    },
    arrival_city: {
        type: mongoose.Types.ObjectId,
        ref: 'City',
        required: true,
    },
    car: {
        type: mongoose.Types.ObjectId,
        ref: 'Car'
    },
    price: {
        type: Number,
        required: true
    },
    passengers: {
        type: Number,
        required: true,
    },
    passenger_package: {
        type: Number,
        required: true
    },
    users: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    ]
})

const Transport = mongoose.model('Transport', TransportSchema)
module.exports = Transport