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

const model = mongoose.model('Car', CarSchema)
export default model