'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seller_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seller_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"sellers",
          key:"id",
        }

      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"products",
          key:"id",
        }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('seller_products');
  }
};