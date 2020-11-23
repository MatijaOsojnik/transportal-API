import mongoose from 'mongoose'

const TransportSchema = new mongoose.Schema({
    departure_time: {
        type: String,
        required: true,
    },
    departure_city_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Cities',
        required: true
    },
    arrival_time: {
        type: String,
        required: true,
    },
    arrival_city_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Cities',
        required: true,
    },
    car_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Cars'
    },
    price: {
        type: Float32Array,
        required: true
    },
    passengers: {
        type: Number,
        required: true,
    },
    passenger_package: {
        type: Number,
        required: true
    }
})

const Transport = mongoose.model('Transport', TransportSchema)
module.exports = Transport