const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: mongoose.Types.ObjectId,
        ref: 'Brand'
    }
})

const Model = mongoose.model('Model', ModelSchema)
module.exports = Model