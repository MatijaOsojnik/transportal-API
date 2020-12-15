const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
         ref: 'City'
     },
})

const User = mongoose.model('User', UserSchema)
module.exports = User