'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sellers',[{
      name:"John",
      email:"John@gmail.com",
      phone:7788990066,
      company:"amazon",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Harry",
      email:"harry@gmail.com",
      phone:9888990066,
      company:"nike",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Ben",
      email:"ben@gmail.com",
      phone:6488990066,
      company:"woodland",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Peter",
      email:"Peter@gmail.com",
      phone:7288990066,
      company:"adidas",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Daniel",
      email:"Daniel@gmail.com",
      phone:9288990066,
      company:"levi's",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sellers',[{
      name:"John",
      email:"John@gmail.com",
      phone:7788990066,
      company:"amazon",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Harry",
      email:"harry@gmail.com",
      phone:9888990066,
      company:"nike",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Ben",
      email:"ben@gmail.com",
      phone:6488990066,
      company:"woodland",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Peter",
      email:"Peter@gmail.com",
      phone:7288990066,
      company:"adidas",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Daniel",
      email:"Daniel@gmail.com",
      phone:9288990066,
      company:"levi's",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  }
};
