const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../lib/sequelize');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('User', 'Admin'),
      defaultValue: 'User',
    },
  },
  {
    sequelize,
    tableName: 'User',
    timestamps: true,
  }
);

module.exports = { User };
