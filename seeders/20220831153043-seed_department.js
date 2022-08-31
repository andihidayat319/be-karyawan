'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('table_departments', [{
      nama_department: 'Business Development',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama_department: 'Finance',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama_department: 'General Affairs',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama_department: 'IT Development',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('table_departments', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
