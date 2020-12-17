const Color = require('../models/Color')

const config = require('../config/config')

module.exports = {

    async all(req, res) {
        try {
            const colors = await Color.find();
            res.json({
                colors: colors
            })
        } catch (e) {
            res.send({
                msg: "Error fetching colors"
            })
        }
    },
    async post(req, res) {
        try {
            const {
                name
            } = req.body;

            color = new Color({
                name
            })

            res.status(200).json({
                msg: 'Successfuly added a color'
            })

            await color.save()
        } catch (e) {
            res.send({
                message: "Error creating color"
            });
        }
    },
}