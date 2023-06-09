'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association here
      cart_product.belongsTo(models.cart, {
        foreignKey: 'cart_id'
      });

      cart_product.belongsTo(models.product, {
        foreignKey: 'product_id'
      });

    }
  }
  cart_product.init({
    user_id: DataTypes.INTEGER,
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart_product',
  });
  return cart_product;
};