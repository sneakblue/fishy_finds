const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const itemsRouter = require('./storeItems.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/storeItems', itemsRouter);


module.exports = router;
