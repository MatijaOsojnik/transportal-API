import mongoose from 'mongoose'

const CarSchema = new mongoose.Schema({
    registration_number: {
        type: String,
        required: true,
    },
    color_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Barve'
    },
        model_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Models'
        }
})

const Car = mongoose.model('Car', CarSchema)
module.exports = Car