'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_address extends Model {
    static associate(models) {
      // define association here
      order_address.belongsTo(models.users, {
        foreignKey: "user_id"
      })
      order_address.hasMany(models.order, {
        foreignKey: "order_address_id",
      });
    }
  }
  order_address.init({
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    pincode: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_address',
  });
  return order_address;
};