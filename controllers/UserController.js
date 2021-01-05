const User = require('../models/User')

const config = require('../config/config')

module.exports = {
    async getUser(req, res) {
        try {
            const user = await User.findOne({_id: req.user.id}, {"password": 0});
            res.json({
                user: {
                    user
                }
            });
        } catch (e) {
            res.send({
                message: "Error in Fetching user"
            });
        }
    },
}