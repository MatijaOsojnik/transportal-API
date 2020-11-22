import mongoose from 'mongoose'

const ColorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

const model = mongoose.model('Color', ColorSchema)
export default model