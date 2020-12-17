const Transport = require('../models/Transport')

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

                const {
                    departure_time,
                    departure_city_id,
                    arrival_time,
                    arrival_city_id,
                    car_id,
                    price,
                    passengers,
                    passenger_package,
                } = req.body;

                transport = new Transport({
                    departure_time,
                    departure_city_id,
                    arrival_time,
                    arrival_city_id,
                    car_id,
                    price,
                    passengers,
                    passenger_package,
                    users: req.user.id
                })

                res.status(200).json({
                    msg: 'Successfuly added a transport'
                })

                await transport.save()
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
                }
                catch (e) {
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