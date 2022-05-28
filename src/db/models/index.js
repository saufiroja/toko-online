const { User } = require('./User.models');
const { Product } = require('./Product.models');
const { Category } = require('./Category.models');

User.hasMany(Product, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Product.hasMany(Category, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = { User };
