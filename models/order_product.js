'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_product extends Model {
    static associate(models) {
      // define association here
      order_product.belongsTo(models.order, { foreignKey: 'order_id' });
      order_product.belongsTo(models.product, { foreignKey: 'product_id' });
      order_product.belongsTo(models.users, { foreignKey: 'user_id' });
    }
  }
  order_product.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_product',
  });
  return order_product;
};