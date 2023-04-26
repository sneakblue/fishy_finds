'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('CategoryItems', [
            {
                sub_category_id: 2,
                store_item_id: 1,
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('CategoryItems', null, {});
    }
};
