const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../lib/sequelize');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Category',
    timestamps: true,
  }
);

module.exports = { Category };
