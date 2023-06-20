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
            {
                title: 'Baitcast Combos',
                category_id: 4
            },
            {
                title: 'Spinning Combos',
                category_id: 4
            },
            {
                title: 'Spincast Combos',
                category_id: 4
            },
            {
                title: 'Saltwater Combos',
                category_id: 4
            },
            {
                title: 'Fly Outfits',
                category_id: 4
            },
            {
                title: 'Casting Rods',
                category_id: 5
            },
            {
                title: 'Spinning Rods',
                category_id: 5
            },
            {
                title: 'Saltwater Rods',
                category_id: 5
            },
            {
                title: 'Fly Rods',
                category_id: 5
            },
            {
                title: 'Kayaks & Fishing Kayaks',
                category_id: 6
            },
            {
                title: 'Kayak & Canoe Accessories',
                category_id: 6
            },
            {
                title: 'Paddles & Oars',
                category_id: 6
            },
            {
                title: 'Fishing Line',
                category_id: 7
            },
            {
                title: 'Fish Hooks',
                category_id: 7
            },
            {
                title: 'Weights & Sinkers',
                category_id: 7
            },
            {
                title: 'Jig Heads',
                category_id: 7
            },
            {
                title: 'Saltwater Terminal',
                category_id: 7
            },
            {
                title: 'Lure Building & Molds',
                category_id: 7
            },
            {
                title: 'Rigs & Components',
                category_id: 7
            },
            {
                title: 'Floats',
                category_id: 7
            },
            {
                title: 'Tackle Boxes',
                category_id: 8
            },
            {
                title: 'Tackle Bags',
                category_id: 8
            },
            {
                title: 'Utility Bags',
                category_id: 8
            },
            {
                title: 'Fishing Apparel',
                category_id: 9
            },
            {
                title: 'Bowfishing',
                category_id: 10
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
