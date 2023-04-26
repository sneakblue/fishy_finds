'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Categories', [
            {
                title: 'Fishing Reels'
            },
            {
                title: 'Lures'
            },
            {
                title: 'Fishing Accessories'
            },
            {
                title: 'Rod & Reel Combos'
            },
            {
                title: 'Rods'
            },
            {
                title: 'Kayaks & Canoes'
            },
            {
                title: 'Fishing Line, Hooks & Weights'
            },
            {
                title: 'Tackle Boxes & Bags'
            },
            {
                title: 'Bowfishing'
            },
            {
                title: 'Fishing Apparel'
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};
