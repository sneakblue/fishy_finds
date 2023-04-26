const express = require('express');
const asyncHandler = require('express-async-handler');
const { StoreItem, SubCategory } = require('../../db/models');
const router = express.Router();


router.get('/bySub/:id', asyncHandler ( async(req, res) => {
    const id = req.params.id;
    const storeItems = await StoreItem.findAll({
        include: [{
            model: SubCategory,
            where: { id }
        }]
    });
    return res.json(storeItems);
}));


module.exports = router;
