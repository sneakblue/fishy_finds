'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoreItem extends Model {
        static associate(models) {
            StoreItem.hasMany(models.CartItem, { foreignKey: 'item_id', onDelete: 'CASCADE', hooks: true });

            const columnMapping = {
                through: 'CategoryItem',
                otherKey: 'sub_category_id',
                foreignKey: 'store_item_id'
            }
            StoreItem.belongsToMany(models.SubCategory, columnMapping);
        }
  }
  StoreItem.init({
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    manufacturer: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
  }, {
    sequelize,
    modelName: 'StoreItem',
  });
  return StoreItem;
};
