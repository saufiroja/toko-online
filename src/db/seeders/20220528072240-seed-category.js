'use strict';

const { uuidV4 } = require('../../lib/generateUUID');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Category',
      [
        {
          id: uuidV4(),
          name: 'Buku',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidV4(),
          name: 'Elektronik',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidV4(),
          name: 'Baju',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Category', null, {});
  },
};
