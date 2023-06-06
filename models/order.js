'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.order_address,{
        foreignKey:"order_address_id"
      })
      order.belongsToMany(models.product,{
        through:"order_product"
      })
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