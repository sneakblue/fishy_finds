const express = require('express');
const asyncHandler = require('express-async-handler');
const { CartItem, StoreItem } = require('../../db/models');

const router = express.Router();

router.post('/addItem', asyncHandler( async (req, res) => {
    const { user_id, item_id, quantity } = req.body;
    const updateItem = await CartItem.findOne({
        where: {
            user_id,
            item_id
        }
    });
    if (updateItem) {
        updateItem.update({
            quantity
        });

    } else {
        await CartItem.create({
            user_id,
            item_id,
            quantity
        });
    }
    const userCartItem = await StoreItem.findByPk(item_id);
    userCartItem.quantity = quantity;
    return res.json(userCartItem);

}))

// Get all cart items for a single User
router.get('/:userId', asyncHandler( async (req, res) => {
    const { userId } = req.params;
    const userItems = await CartItem.findAll({
        where: {
            user_id: userId
        },
        include: StoreItem
    });

}));

module.exports = router;
