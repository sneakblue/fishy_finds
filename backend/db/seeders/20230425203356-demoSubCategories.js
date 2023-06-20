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
            {
                title: 'Hard Bait Lures',
                category_id: 2
            },
            {
                title: 'Soft Bait Lures',
                category_id: 2
            },
            {
                title: 'Spinnerbaits & Buzzbaits',
                category_id: 2
            },
            {
                title: 'Bass Jigs',
                category_id: 2
            },
            {
                title: 'Saltwater Lures',
                category_id: 2
            },
            {
                title: 'Panfish Lures',
                category_id: 2
            },
            {
                title: 'Fishing Spoons',
                category_id: 2
            },
            {
                title: 'Lure Kits',
                category_id: 2
            },
            {
                title: 'Fillet Knives & Tables',
                category_id: 3
            },
            {
                title: 'Fishing Nets',
                category_id: 3
            },
            {
                title: 'Bait Buckets & Management',
                category_id: 3
            },
            {
                title: 'Saltwater Accessories',
                category_id: 3
            },
            {
                title: 'Rod & Reel Accessories',
                category_id: 3
            },
            {
                title: 'Rod Holders & Racks',
                category_id: 3
            },
            {
                title: 'Tools & Pliers',
                category_id: 3
            },
            {
                title: 'Rulers & Scales',
                category_id: 3
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
