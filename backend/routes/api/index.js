const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const itemsRouter = require('./storeItems.js');
const categoriesRouter = require('./categories.js');
const cartItemsRouter = require('./cartItems.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/storeItems', itemsRouter);

router.use('/categories', categoriesRouter);

router.use('/cartItems', cartItemsRouter);

module.exports = router;
