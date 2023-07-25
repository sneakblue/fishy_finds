const express = require('express');
const asyncHandler = require('express-async-handler');
const { CartItem, StoreItem } = require('../../db/models');

const router = express.Router();

// Add Item to Cart
router.post('/addItem', asyncHandler( async (req, res) => {
    const { user_id, item_id, quantity } = req.body;
    const updateItem = await CartItem.findOne({
        where: {
            user_id,
            item_id
        }
    });
    let newQuantity;
    if (updateItem) {
        newQuantity = updateItem.quantity + Number(quantity)
        updateItem.update({
            quantity: newQuantity
        });

    } else {
        newQuantity = quantity;
        await CartItem.create({
            user_id,
            item_id,
            quantity
        });
    }
    const userCartItem = await StoreItem.findByPk(item_id);
    const cartItem = {
        userCartItem,
        newQuantity
    }
    return res.json(cartItem);
}));

// Update Quantity of Cart Item
router.put('/updateItem', asyncHandler( async (req, res) => {
    const { user_id, item_id, quantity } = req.body;
    const updateItem = await CartItem.findOne({
        where: {
            user_id,
            item_id
        }
    });
    await updateItem.update({
        quantity: quantity
    });
    return res.json({ message: 'Successfully updated!! '});
}));

// Delete a single item from User Cart
router.delete('/user/:userId/item/:itemId', asyncHandler( async (req, res) => {
    const { userId, itemId } = req.params;
    await CartItem.destroy({
        where: {
            user_id: userId,
            item_id: itemId
        }
    });
    return res.json({ message: 'Cart Item Removed' });
}));

// Get all cart items for a single User
router.get('/:userId', asyncHandler( async (req, res) => {
    const { userId } = req.params;
    const userItems = await CartItem.findAll({
        where: {
            user_id: userId
        }
    });
    let storeItems = [];
    for (let i = 0; i < userItems.length; i++) {
        let item = userItems[i];
        let storeItem = await StoreItem.findByPk(item.item_id);
        storeItems.push(storeItem);
    }
    return res.json({userItems, storeItems});
}));

module.exports = router;
