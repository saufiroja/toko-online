const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
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
  isActived: {
    type: DataTypes.ENUM('Pending', 'Active'),
    defaultValue: 'Pending',
  },
  otp: {
    type: DataTypes.STRING,
  },
  expiredOtp: {
    type: DataTypes.DATE,
  },
  resetPasswordToken: {
    type: DataTypes.STRING,
  },
  expiredPasswordToken: {
    type: DataTypes.DATE,
  },
});

module.exports = { User };
