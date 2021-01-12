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
                path: 'car', populate: [{
                    path: 'model'
                }, {
                    path: 'brand'
                }, {
                    path: 'color'
                }]
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
                model: car.model,
                brand: car.brand,
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
    async put(req, res) {
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

            const transport = await Transport.findById(req.params.id)
            if (transport.users[0]._id == req.user.id) {

                const updatedCar = await Car.findByIdAndUpdate(car._id, {
                    registration_number: car.registration_number,
                    color: car.color,
                    model: car.model,
                    brand: car.brand,
                }, {
                    new: true,
                    useFindAndModify: false
                }, )

                const updatedTransport = await Transport.findByIdAndUpdate(req.params.id, {
                    departure_time,
                    departure_city,
                    arrival_time,
                    arrival_city,
                    price,
                    passengers,
                    passenger_package,
                }, {new: true, useFindAndModify: false})

                res.status(200).json({
                    message: "Successfuly updated a transport",
                })
            } else {
                throw Error('Cannot update if not owner')
            }

        } catch (e) {
            res.send({
                message: "Error updating Transport"
            });
        }
    },
    async delete(req, res) {
        try {
            const transport = await Transport.findById(req.params.id);
            if (transport.users[0]._id == req.user.id) {
                const deletedCar = await Car.findByIdAndDelete(transport.car._id)
                const deletedTransport = await transport.deleteOne()
                res.status(200).json({
                    message: "Successfuly updated a transport"
                })
            } else {
                throw Error('Cannot delete transport if not owner');
            }
        } catch (error) {
            res.send({
                message: "Error deleting Transport"
            });
        }
    },
    async joinSingle(req, res) {
        try {
            const userId = req.user.id
            const transport = await Transport.findById(req.params.id);
            if (transport.users[0]._id !== userId) {
                const transportUsers = transport.users.filter(user => user._id == userId)
                if (transportUsers.length > 0) {
                    throw Error
                } else {
                    transport.users.push(userId);
                    transport.save();
                    res.status(200).json({
                        message: "Successfuly added user to a transport"
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.send({
                message: "Error updating transport"
            });
        }
    },
        async leaveSingle(req, res) {
            try {
                const userId = req.user.id
                const transport = await Transport.findById(req.params.id);
                if (transport.users[0]._id !== userId) {
                    const transportUsers = transport.users.filter(user => user._id == userId)
                    if (transportUsers.length == 0) {
                        throw Error
                    } else {
                        transport.users.pop(userId);
                        transport.save();
                        res.status(200).json({
                            message: "Successfuly removed user from transport"
                        })
                    }
                }
            } catch (error) {
                console.log(error)
                res.send({
                    message: "Error updating transport"
                });
            }
        }
}