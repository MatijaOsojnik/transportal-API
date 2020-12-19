const Model = require('../models/model')

const config = require('../config/config');

module.exports = {

    async all(req, res) {
        try {
            // const models = await Model.find().populate({
            //     path: 'brand_id',
            //     select: 'name'
            // });

            await Model.findOne({name: "A5"}).populate("brand").exec((err, model) => {
                if (err) return handleError(err);
                console.log('The brand is %s', model.brand.name);
            })
            
            res.json({
                models: models
            })
        } catch (e) {
            res.send({
                msg: "Error fetching models"
            })
        }
    },
    async post(req, res) {
        try {
            const {
                name,
                brand
            } = req.body;

            model = new Model({
                name,
                brand
            })

            res.status(200).json({
                msg: 'Successfuly added a model'
            })

            await model.save()
        } catch (e) {
            res.send({
                message: "Error creating model"
            });
        }
    },
}