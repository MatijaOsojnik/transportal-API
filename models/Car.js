const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CarSchema = new mongoose.Schema({
    registration_number: {
        type: String,
        required: true,
    },
    color_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Color'
    },
    model_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Model'
    }
})

const Car = mongoose.model('Car', CarSchema)
module.exports = Car