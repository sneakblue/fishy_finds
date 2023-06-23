const express = require('express');
const asyncHandler = require('express-async-handler');
const { Category, SubCategory } = require('../../db/models');

const router = express.Router();

// Get all Categories
router.get('/', asyncHandler(async (req, res) => {
    const categories = await Category.findAll();

    return res.json(categories);
}));

// Get all Sub-Categories for a Category
router.get('/:id/sub', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const subCategories = await SubCategory.findAll({
        include: [{
            model: Category,
            where: { id },
            attributes: []
        }]
    });

    return res.json(subCategories);
}));

// Get all Sub-Categories
router.get('/sub/all', asyncHandler(async (req, res) => {
    const subCategories = await SubCategory.findAll();

    return res.json(subCategories);
}));

// Get a single Sub-Category
router.get('/sub/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const subCategory = await SubCategory.findByPk(id);
    return res.json(subCategory);
}));

module.exports = router;
