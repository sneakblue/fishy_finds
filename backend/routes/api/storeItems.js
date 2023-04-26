const express = require('express');
const asyncHandler = require('express-async-handler');
const { StoreItem, SubCategory } = require('../../db/models');
const detailFormatter = require('../../utils/detailFormatter');
const router = express.Router();


router.get('/bySub/:id', asyncHandler ( async(req, res) => {
    const id = req.params.id;
    const storeItems = await StoreItem.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt']},
        include: [{
            model: SubCategory,
            attributes: [],
            where: { id }
        }]
    });
    if (storeItems) {
        storeItems.forEach(item => {
            item.details = detailFormatter(item.details);
        });
    }
    return res.json(storeItems);
}));


module.exports = router;
