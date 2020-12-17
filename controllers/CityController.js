const City = require('../models/City')

const config = require('../config/config')

module.exports = {

    async all(req, res) {
        try {
            const cities = await City.find();
            res.json({
                cities: cities
            })
        } catch (e) {
            res.send({
                msg: "Error fetching cities"
            })
        }
    },
    async post(req, res) {
        try {

            const {
                name,
                post_num
            } = req.body;

            city = new City({
                name,
                post_num
            })

            res.status(200).json({
                msg: 'Successfuly added a city'
            })

            await city.save()
        } catch (e) {
            res.send({
                message: "Error creating a city"
            });
        }
    },
}