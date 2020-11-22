import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    icon_url: {
        type: String,
        required: false,
    },
     city_id: {
         type: Schema.Types.ObjectId,
         ref: 'Cities'
     },
})

const model = mongoose.model('User', UserSchema)
export default model