import mongoose from 'mongoose'

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

const model = mongoose.model('Brand', BrandSchema)
export default model