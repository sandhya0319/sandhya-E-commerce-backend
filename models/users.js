'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      // define association here
      users.hasOne(models.cart, {
        foreignKey: "user_id"
      })
      users.hasMany(models.order_address, {
        foreignKey: "user_id"
      })
      users.hasOne(models.user_address, {
        foreignKey: "user_id"
      })
      users.hasMany(models.order_product, {
        foreignKey: 'user_id'
      });
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile: DataTypes.STRING,
    gender: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    modelName: 'users',
  });
  return users;
};