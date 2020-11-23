import mongoose from 'mongoose'

const ModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Brands'
    }
})

const Model = mongoose.model('Model', ModelSchema)
module.exports = Model