'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('CategoryItems', [
            {
                sub_category_id: 2,
                store_item_id: 1,
            },
            {
                sub_category_id: 1,
                store_item_id: 2
            },
            {
                sub_category_id: 1,
                store_item_id: 3
            },
            {
                sub_category_id: 1,
                store_item_id: 4
            },
            {
                sub_category_id: 1,
                store_item_id: 5
            },
            {
                sub_category_id: 1,
                store_item_id: 6
            },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('CategoryItems', null, {});
    }
};
