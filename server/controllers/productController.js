const { Product } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ProductController {
    async create (req, res, next) {
        try {
            console.log("req", req);
            const { name, description, price, typeId } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const product = await Product.create({ name, description, price, typeId, img: fileName });
            return res.json( product );
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll (req, res) {
        const product = await Product.findAll();
        return res.json(product);
    }
}

module.exports = new ProductController();