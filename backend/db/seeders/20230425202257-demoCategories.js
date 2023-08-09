'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Categories', [
            {
                title: 'Fishing Reels',
                imageUrl: 'https://images.unsplash.com/photo-1452109436269-d410ed332571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            },
            {
                title: 'Lures',
                imageUrl: 'https://images.unsplash.com/photo-1604417429445-2ef33ea36574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80'
            },
            {
                title: 'Fishing Accessories',
                imageUrl: 'https://images.unsplash.com/photo-1565027476253-ce1e3113c96b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80'
            },
            {
                title: 'Rod & Reel Combos',
                imageUrl: 'https://images.unsplash.com/photo-1619054976487-7198b8924922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            },
            {
                title: 'Rods',
                imageUrl: 'https://images.unsplash.com/photo-1598090022577-3998a11cb64b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            },
            {
                title: 'Kayaks & Canoes',
                imageUrl: 'https://images.unsplash.com/photo-1588472235276-7638965471e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
            },
            {
                title: 'Fishing Line, Hooks & Weights',
                imageUrl: 'https://images.unsplash.com/photo-1542405620-db6714cfc42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            },
            {
                title: 'Tackle Boxes & Bags',
                imageUrl: 'https://images.unsplash.com/photo-1611110176776-ea2a9ba5d376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            },
            {
                title: 'Fishing Apparel',
                imageUrl: 'https://images.unsplash.com/photo-1512407297305-c5f5327edd4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};
