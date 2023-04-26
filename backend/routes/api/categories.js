const express = require('express');
const asyncHandler = require('express-async-handler');
const { Category, SubCategory } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const categories = await Category.findAll();

    return res.json(categories);
}));

router.get('/:id/sub', asyncHandler(async (req, res) => {
    const { id } = req.params
    const subCategories = await SubCategory.findAll({
        include: [{
            model: Category,
            where: { id },
            attributes: []
        }]
    });

    return res.json(subCategories);
}));

router.get('/sub/all', asyncHandler(async (req, res) => {
    const subCategories = await SubCategory.findAll();

    return res.json(subCategories);
}))

module.exports = router;
