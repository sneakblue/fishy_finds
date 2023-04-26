'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CategoryItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sub_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Sub-Categories'
        }
      },
      store_item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'StoreItems'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CategoryItems');
  }
};
