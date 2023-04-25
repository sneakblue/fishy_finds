'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
        static associate(models) {
            CartItem.belongsTo(models.User, { foreignKey: 'user_id'});
            CartItem.belongsTo(models.StoreItem, { foreignKey: 'item_id'});
        }
  }
  CartItem.init({
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'cartItem',
  });
  return CartItem;
};
