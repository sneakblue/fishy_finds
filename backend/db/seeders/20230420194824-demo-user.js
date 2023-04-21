'use strict';
const bcrypt = require('bcryptjs');

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
    await queryInterface.bulkInsert('Users', [
        {
            email:'demo@user.io',
            username: 'Demo-lition',
            hashedPassword: bcrypt.hashSync('password')
        },
        {
            email: 'fakeUser1@test.io',
            username: 'FakeUser1',
            hashedPassword: bcrypt.hashSync('password')
        },
        {
            email: 'fakeUser2@test.io',
            username: 'FakeUser2',
            hashedPassword: bcrypt.hashSync('password')
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
    // await queryInterface.bulkDelete('Users', {
    //     username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    // }, {});

    await queryInterface.bulkDelete('Users', null, {});
  }
};
