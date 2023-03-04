const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');

router.get('/:id');
router.get('/', typeController.getAll);
router.post('/', typeController.create);
router.delete('/:id');

module.exports = router;