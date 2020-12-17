const Car = require('../models/Car')

const config = require('../config/config')

module.exports = {

    async all(req, res) {
        try {
            const cars = await Car.find();
            res.json({
                cars: cars
            })
        } catch (e) {
            res.send({
                msg: "Error fetching cars"
            })
        }
    },
    async post(req, res) {
        try {

            const {
                registration_number,
                color_id,
                model_id
            } = req.body;

            car = new Car({
                registration_number,
                color_id,
                model_id
            })

            res.status(200).json({
                msg: 'Successfuly added a car'
            })

            await car.save()
        } catch (e) {
            res.send({
                message: "Error in Fetching user"
            });
        }
    },
}