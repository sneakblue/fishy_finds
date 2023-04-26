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
        await queryInterface.bulkInsert('StoreItems', [
            {
                name: 'Pflueger President Spinning Reel',
                price: 59.95,
                description: "Smooth performance plus toughness - a great value! The Pflueger® President® Spinning Reel's lightweight graphite body houses a rugged, corrosion-resistant stainless steel main shaft and components. The system runs effortlessly on 9 stainless steel ball bearings (Model PRESSP20 has 6), plus 1 instant anti-reverse bearing, and the machined and ported, double-anodized aluminum spool is braid-ready. Smooth multi-disc drag; solid aluminum bail wire; graphite body and rotor; slow oscillation gearing; soft touch handle knob; on/off anti-reverse; easy left/right conversion.",
                details: 'Retrieve-Left/Right,Gear Ratio-5.2:1,Description-20 Size,Model Number-PRESSP20X,Ball Bearings-6+1,Max Drag-7 Lbs.,Reel Weight(oz)-6.2,Line Capacity-4/100,Braid Capacity-6/125,Recovery-20.7" Per Turn'
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('StoreItems', null, {});
    }
};
