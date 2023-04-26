'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        await queryInterface.bulkInsert('SubCategories', [
            {
                title: 'Baitcast Reels',
                category_id: 1
            },
            {
                title: 'Spinning Reels',
                category_id: 1
            },
            {
                title: 'Spincast Reels',
                category_id: 1
            },
            {
                title: 'Saltwater Reels',
                category_id: 1
            },
            {
                title: 'Fly Reels',
                category_id: 1
            },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('SubCategories', null, {});
    }
};
