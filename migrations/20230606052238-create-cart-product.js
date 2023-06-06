'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cart_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"users",
          key:"id"
        }
      },
      cart_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"carts",
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
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
    await queryInterface.dropTable('cart_products');
  }
};