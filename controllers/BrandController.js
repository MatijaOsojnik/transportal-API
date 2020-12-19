const Brand = require('../models/brand')

const config = require('../config/config');

module.exports = {

    async all(req, res) {
        try {
            const brands = await Brand.find();
            res.json({
                brands: brands
            })
        } catch (e) {
            res.send({
                msg: "Error fetching brands"
            })
        }
    },
        async single(req, res) {
            try {
                const brand = await Brand.findOne({name: "Audi"});
                res.json({
                    brand: brand._id
                })
            } catch (e) {
                res.send({
                    msg: "Error fetching brand"
                })
            }
        },
    async post(req, res) {
        try {
            const {
                name,
            } = req.body;

            brand = new Brand({
                name,
            })

            res.status(200).json({
                msg: 'Successfuly added a brand'
            })

            await brand.save()
        } catch (e) {
            res.send({
                message: "Error creating brand"
            });
        }
    },
}