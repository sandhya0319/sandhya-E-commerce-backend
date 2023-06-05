'use strict';

const category = require('../models/category');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',[{
      title:"veseline",
      description:"Rejuvenate your skin with the original, Pure Skin Jelly from Vaseline. Formulated with 100% pure petroleum jelly",
      product_img:"https://www.google.com/search?q=vaseline+products&client=ubuntu&hs=w1C&channel=fs&sxsrf=APwXEddSq9SAf7PaqU5yhCPGpJiBPE4MuQ:1685966141448&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjlgduniaz_AhWPcWwGHWJFCz4Q_AUoAXoECAEQAw&biw=1368&bih=788&dpr=1#spd=7230205128313063763",
      product_status:"available",
      price:450,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"himalaya-facewash",
      description:"all types of products available",
      product_img:"https://www.google.com/search?q=himalaya+face+wash+image&client=ubuntu&hs=olX&channel=fs&sxsrf=APwXEde5Jyzc2yF0vKpVWMKaOH872mKlzA:1685966424860&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj5oe2uiqz_AhWncGwGHfdMDNcQ_AUoAXoECAEQAw&biw=1368&bih=788&dpr=1#imgrc=2mo-WuOKk-eVXM",
      product_status:"available",
      price:700,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"T-shirt",
      description:"all types of fabrics available",
      product_img:"https://www.flipkart.com/smartees-typography-men-round-neck-black-t-shirt/p/itm8678d18e2bc14?pid=TSHGNQSZGKQAKJZK&lid=LSTTSHGNQSZGKQAKJZK4UJBPS&marketplace=FLIPKART&store=clo%2Fash%2Fank%2Fedy&srno=b_1_3&otracker=browse&fm=organic&iid=338513fe-ca60-4f58-b2ea-62c65e53a08a.TSHGNQSZGKQAKJZK.SEARCH&ppt=None&ppn=None&ssid=wt34t5n2s39r2whs1685966347559",
      product_status:"available",
      price:450,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products',[{
      title:"veseline",
      description:"Rejuvenate your skin with the original, Pure Skin Jelly from Vaseline. Formulated with 100% pure petroleum jelly",
      product_img:"https://www.google.com/search?q=vaseline+products&client=ubuntu&hs=w1C&channel=fs&sxsrf=APwXEddSq9SAf7PaqU5yhCPGpJiBPE4MuQ:1685966141448&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjlgduniaz_AhWPcWwGHWJFCz4Q_AUoAXoECAEQAw&biw=1368&bih=788&dpr=1#spd=7230205128313063763",
      product_status:"available",
      price:450,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"himalaya-facewash",
      description:"all types of products available",
      product_img:"https://www.google.com/search?q=himalaya+face+wash+image&client=ubuntu&hs=olX&channel=fs&sxsrf=APwXEde5Jyzc2yF0vKpVWMKaOH872mKlzA:1685966424860&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj5oe2uiqz_AhWncGwGHfdMDNcQ_AUoAXoECAEQAw&biw=1368&bih=788&dpr=1#imgrc=2mo-WuOKk-eVXM",
      product_status:"available",
      price:700,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"T-shirt",
      description:"all types of fabrics available",
      product_img:"https://www.flipkart.com/smartees-typography-men-round-neck-black-t-shirt/p/itm8678d18e2bc14?pid=TSHGNQSZGKQAKJZK&lid=LSTTSHGNQSZGKQAKJZK4UJBPS&marketplace=FLIPKART&store=clo%2Fash%2Fank%2Fedy&srno=b_1_3&otracker=browse&fm=organic&iid=338513fe-ca60-4f58-b2ea-62c65e53a08a.TSHGNQSZGKQAKJZK.SEARCH&ppt=None&ppn=None&ssid=wt34t5n2s39r2whs1685966347559",
      product_status:"available",
      price:450,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  }
};
