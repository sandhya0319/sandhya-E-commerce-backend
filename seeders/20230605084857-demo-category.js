'use strict';

const product = require('../models/product');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories',[{
      category_name:"beautycare",
      description:"all types of products available",
      status:"available",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name:"skincare",
      description:"all types of products available",
      status:"available",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name:"cloths",
      description:"all types of products available",
      status:"available",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{ include: { model: product } })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories',[{
      category_name:"beautycare",
      description:"all types of products available",
      status:"available",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name:"skincare",
      description:"all types of products available",
      status:"available",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name:"cloths",
      description:"all types of products available",
      status:"available",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  }
};
