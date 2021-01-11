const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CarSchema = new mongoose.Schema({
    registration_number: {
        type: String,
        required: true,
    },
    color: {
        type: mongoose.Types.ObjectId,
        ref: 'Color'
    },
    brand: {
        type: mongoose.Types.ObjectId,
        ref: 'Brand'
    },
    model: {
        type: mongoose.Types.ObjectId,
        ref: 'Model'
    }, 
})

const Car = mongoose.model('Car', CarSchema)
module.exports = Car