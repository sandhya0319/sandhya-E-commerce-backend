'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products','product_img',{
      type:Sequelize.TEXT,
      allowNull:false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products','product_img',{
      type:Sequelize.TEXT,
      allowNull:false,
    });
  }
};
