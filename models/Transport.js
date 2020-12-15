import mongoose from 'mongoose'

const TransportSchema = new mongoose.Schema({
    departure_time: {
        type: String,
        required: true,
    },
    departure_city_id: {
        type: mongoose.Types.ObjectId,
        ref: 'City',
        required: true
    },
    arrival_time: {
        type: String,
        required: true,
    },
    arrival_city_id: {
        type: mongoose.Types.ObjectId,
        ref: 'City',
        required: true,
    },
    car_id: {
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