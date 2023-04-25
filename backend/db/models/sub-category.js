'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
        static associate(models) {
            SubCategory.hasMany(models.StoreItem, { foreignKey: 'sub_category_id', onDelete: 'CASCADE', hooks: true });
            SubCategory.belongsTo(models.Category, { foreignKey: 'category_id' });
        }
  }
  SubCategory.init({
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Sub-Category',
  });
  return SubCategory;
};
