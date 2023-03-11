const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController')

router.get('/', productController.getAll);
router.post('/', productController.create);

module.exports = router;