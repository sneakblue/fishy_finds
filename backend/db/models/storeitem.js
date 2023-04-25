'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoreItem extends Model {
        static associate(models) {
            StoreItem.hasMany(models.CartItem, { foreignKey: 'item_id', onDelete: 'CASCADE', hooks: true });
            // StoreItem.belongsTo(models.SubCategory, { foreignKey: 'sub_category_id' });

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
    // sub_category_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
  }, {
    sequelize,
    modelName: 'StoreItem',
  });
  return StoreItem;
};
