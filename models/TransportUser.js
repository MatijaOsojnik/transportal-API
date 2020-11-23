import mongoose from 'mongoose'

const TransportUserSchema = new mongoose.Schema({
    transport_id: {
        type: mongoose.Types.ObjectId,
            ref: 'Transports',
            required: true
        },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        required: true
    }
})

const TransportUser = mongoose.model('TransportUser', TransportUserSchema)
module.exports = TransportUser