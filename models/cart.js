'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     

      cart.belongsToMany(models.product,{
        through:"cart_product"
      });
      cart.belongsTo(models.users,{
        foreignKey:"user_id"
      })
    }
  }
  cart.init({
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};