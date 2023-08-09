'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Categories', [
            {
                title: 'Fishing Reels',
                imageUrl: ''
            },
            {
                title: 'Lures',
                imageUrl: ''
            },
            {
                title: 'Fishing Accessories',
                imageUrl: ''
            },
            {
                title: 'Rod & Reel Combos',
                imageUrl: ''
            },
            {
                title: 'Rods',
                imageUrl: ''
            },
            {
                title: 'Kayaks & Canoes',
                imageUrl: ''
            },
            {
                title: 'Fishing Line, Hooks & Weights',
                imageUrl: ''
            },
            {
                title: 'Tackle Boxes & Bags',
                imageUrl: ''
            },
            {
                title: 'Bowfishing',
                imageUrl: ''
            },
            {
                title: 'Fishing Apparel',
                imageUrl: ''
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};
