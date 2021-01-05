const Transport = require('../models/Transport')
const Car = require('../models/Car')

const config = require('../config/config')

module.exports = {

    async all(req, res) {
        try {
            const transports = await Transport.find().populate([{
                path: 'car',
            }, {
                path: 'departure_city'
            }, {
                path: 'arrival_city'
            }, {
                path: 'users'
            }]);
            res.json({
                transports: transports
            })
        } catch (e) {
            res.send({
                msg: "Error fetching transports"
            })
        }
    },

    async single(req, res) {
        try {
                    const transportId = req.params.id
                    const transport = await Transport.findById(transportId).populate([{
                        path: 'car',
                    }, {
                        path: 'departure_city'
                    }, {
                        path: 'arrival_city'
                    }, {
                        path: 'users'
                    }]);
                    res.status(200).json({
                        transport: transport
                    })
        } catch (error) {
                        res.send({
                            msg: "Error fetching transport"
                        })
        }
    },

    async post(req, res) {
        try {

            const {
                departure_time,
                departure_city,
                arrival_time,
                arrival_city,
                car,
                price,
                passengers,
                passenger_package,
            } = req.body;

            const newCar = new Car({
                registration_number: car.registration_number,
                color: car.color,
                model: car.model
            })

            await newCar.save()

            const transport = new Transport({
                departure_time,
                departure_city,
                arrival_time,
                arrival_city,
                car: newCar._id,
                price,
                passengers,
                passenger_package,
                users: [req.user.id]
            });

            await transport.save()

            res.status(200).json({
                message: "Successfuly created a new transport"
            })

        } catch (e) {
            res.send({
                message: "Error in Fetching user"
            });
        }
    },
    async update(req, res) {
        try {
            await Transport.findByIdAndUpdate(
                req.params.id,
                req.body,
                (err, docs) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("Updated Transport : ", docs);
                    }
                }
            )
        } catch (e) {
            res.send({
                message: "Error updating Transport"
            });
        }
    },
    // async delete(req, res) {
    //     try {

    //     } catch (error) {

    //     }
}