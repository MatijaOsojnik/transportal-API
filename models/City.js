import mongoose from 'mongoose'

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    post_num: {
        type: String,
        required: false
    }
})

const model = mongoose.model('City', CitySchema)
export default model