'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
        static associate(models) {
            Category.hasMany(models.SubCategory, { foreignKey: 'category_id', onDelete: 'CASCADE', hooks: true })
        }
  }
  Category.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
