class UserController {
    async registration (req, res) {

    }

    async login (req, res) {
        
    }
    
    async check (req, res) {
        const { msg, id } = req.query

        res.json(`msg = ${msg} id = ${id}`)
    }
}

module.exports = new UserController();