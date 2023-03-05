const ApiError = require('../error/ApiError');

class UserController {
    async registration (req, res) {

    }

    async login (req, res) {
        
    }
    
    async check (req, res, next) {
        const { msg, id } = req.query

        if(!id) {
            return next(ApiError.badRequest('Id отсутствует'));
        }

        return res.json(`id = ${id}`);
    }
}

module.exports = new UserController();