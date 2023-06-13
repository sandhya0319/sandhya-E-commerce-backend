'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {
      order.belongsTo(models.order_address, {
        foreignKey: "order_address_id",
      });

      order.hasMany(models.order_product, {
        foreignKey: 'order_id',
      });
    }
  }
  order.init({
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    order_address_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};