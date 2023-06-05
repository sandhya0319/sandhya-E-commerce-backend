'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.removeColumn('products','product_img');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products','product_img');
  }
};
