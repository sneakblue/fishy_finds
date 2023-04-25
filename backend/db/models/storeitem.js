'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoreItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StoreItem.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StoreItem',
  });
  return StoreItem;
};