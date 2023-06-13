'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsToMany(models.category, { through: 'product_category' });
      // product.belongsToMany(models.seller,{through:'seller_product'})
      product.belongsToMany(models.cart, {
        through: "cart_product",
        foreignKey: 'product_id',
        otherKey: 'cart_id'
      })
      product.belongsToMany(models.order, {
        through: models.order_product, // Use the association model "order_product"
        foreignKey: 'product_id',
        otherKey: 'order_id'
      });
    }
  }
  product.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    product_img: DataTypes.STRING,
    product_status: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'product',
  });
  return product;
};