const Transport = require('../models/Transport')
const Car = require('../models/Car')

const config = require('../config/config')

module.exports = {

    async all(req, res) {
        try {
            const transports = await Transport.find();
            res.json({
                transports: transports
            })
        } catch (e) {
            res.send({
                msg: "Error fetching transports"
            })
        }
    },
    async post(req, res) {
        try {

            // const {
            //     departure_time,
            //     departure_city,
            //     arrival_time,
            //     arrival_city,
            //     car,
            //     price,
            //     passengers,
            //     passenger_package,
            // } = req.body;

            // const newCar = new Car({
            //     registration_number: car.registration_number,
            //     color: car.color,
            //     model: car.model
            // })

            // console.log(req.user._id)
            // console.log(newCar)

            //             res.status(200).json({
            //                 msg: 'Successfuly added a transport'
            //             })

            // await newCar.save()

            const {
                car
            } = req.body;

            console.log(req.headers)


            const newCar = new Car({
                registration_number: car.registration_number,
                color: car.color,
                model: car.model
            })

            console.log(newCar)
            console.log(req.user)

            res.status(200).json({
                msg: 'Successfuly added a car'
            })

            await newCar.save()

            // transport = new Transport({
            //     departure_time,
            //     departure_city,
            //     arrival_time,
            //     arrival_city,
            //     car: newCar._id,
            //     price,
            //     passengers,
            //     passenger_package,
            //     users: req.user._id
            // });

            // await transport.save()

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