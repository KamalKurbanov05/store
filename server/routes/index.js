const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const producRouter = require('./productRouter');
const typeRouter = require('./typeRouter');

router.use('/user', userRouter);
router.use('/product', producRouter);
router.use('/type', typeRouter);

module.exports = router;