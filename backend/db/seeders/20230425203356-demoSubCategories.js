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
                category_id: 1,
                imageUrl: ''
            },
            {
                title: 'Spinning Reels',
                category_id: 1,
                imageUrl: ''
            },
            {
                title: 'Spincast Reels',
                category_id: 1,
                imageUrl: ''
            },
            {
                title: 'Saltwater Reels',
                category_id: 1,
                imageUrl: ''
            },
            {
                title: 'Fly Reels',
                category_id: 1,
                imageUrl: ''
            },
            {
                title: 'Hard Bait Lures',
                category_id: 2,
                imageUrl: ''
            },
            {
                title: 'Soft Bait Lures',
                category_id: 2,
                imageUrl: ''
            },
            {
                title: 'Spinnerbaits & Buzzbaits',
                category_id: 2,
                imageUrl: ''
            },
            {
                title: 'Bass Jigs',
                category_id: 2,
                imageUrl: ''
            },
            {
                title: 'Saltwater Lures',
                category_id: 2,
                imageUrl: ''
            },
            {
                title: 'Panfish Lures',
                category_id: 2,
                imageUrl: ''
            },
            {
                title: 'Fishing Spoons',
                category_id: 2,
                imageUrl: ''
            },
            {
                title: 'Lure Kits',
                category_id: 2,
                imageUrl: ''
            },
            {
                title: 'Fillet Knives & Tables',
                category_id: 3,
                imageUrl: ''
            },
            {
                title: 'Fishing Nets',
                category_id: 3,
                imageUrl: ''
            },
            {
                title: 'Bait Buckets & Management',
                category_id: 3,
                imageUrl: ''
            },
            {
                title: 'Saltwater Accessories',
                category_id: 3,
                imageUrl: ''
            },
            {
                title: 'Rod & Reel Accessories',
                category_id: 3,
                imageUrl: ''
            },
            {
                title: 'Rod Holders & Racks',
                category_id: 3,
                imageUrl: ''
            },
            {
                title: 'Tools & Pliers',
                category_id: 3,
                imageUrl: ''
            },
            {
                title: 'Rulers & Scales',
                category_id: 3,
                imageUrl: ''
            },
            {
                title: 'Baitcast Combos',
                category_id: 4,
                imageUrl: ''
            },
            {
                title: 'Spinning Combos',
                category_id: 4,
                imageUrl: ''
            },
            {
                title: 'Spincast Combos',
                category_id: 4,
                imageUrl: ''
            },
            {
                title: 'Saltwater Combos',
                category_id: 4,
                imageUrl: ''
            },
            {
                title: 'Fly Outfits',
                category_id: 4,
                imageUrl: ''
            },
            {
                title: 'Casting Rods',
                category_id: 5,
                imageUrl: ''
            },
            {
                title: 'Spinning Rods',
                category_id: 5,
                imageUrl: ''
            },
            {
                title: 'Saltwater Rods',
                category_id: 5,
                imageUrl: ''
            },
            {
                title: 'Fly Rods',
                category_id: 5,
                imageUrl: ''
            },
            {
                title: 'Kayaks & Fishing Kayaks',
                category_id: 6,
                imageUrl: ''
            },
            {
                title: 'Kayak & Canoe Accessories',
                category_id: 6,
                imageUrl: ''
            },
            {
                title: 'Paddles & Oars',
                category_id: 6,
                imageUrl: ''
            },
            {
                title: 'Fishing Line',
                category_id: 7,
                imageUrl: ''
            },
            {
                title: 'Fish Hooks',
                category_id: 7,
                imageUrl: ''
            },
            {
                title: 'Weights & Sinkers',
                category_id: 7,
                imageUrl: ''
            },
            {
                title: 'Jig Heads',
                category_id: 7,
                imageUrl: ''
            },
            {
                title: 'Saltwater Terminal',
                category_id: 7,
                imageUrl: ''
            },
            {
                title: 'Lure Building & Molds',
                category_id: 7,
                imageUrl: ''
            },
            {
                title: 'Rigs & Components',
                category_id: 7,
                imageUrl: ''
            },
            {
                title: 'Floats',
                category_id: 7,
                imageUrl: ''
            },
            {
                title: 'Tackle Boxes',
                category_id: 8,
                imageUrl: ''
            },
            {
                title: 'Tackle Bags',
                category_id: 8,
                imageUrl: ''
            },
            {
                title: 'Utility Bags',
                category_id: 8,
                imageUrl: ''
            },
            {
                title: 'Fishing Apparel',
                category_id: 10,
                imageUrl: ''
            },
            {
                title: 'Bowfishing',
                category_id: 9,
                imageUrl: ''
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
