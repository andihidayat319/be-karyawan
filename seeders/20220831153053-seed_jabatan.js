'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('table_jabatans', [{
      id_department: 4,
      nama_jabatan: 'Fullstack Developer',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id_department: 4,
      nama_jabatan: 'BackEnd Developer',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id_department: 4,
      nama_jabatan: 'FrontEnd Developer',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id_department: 2,
      nama_jabatan: 'HRD',
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
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
    await queryInterface.bulkDelete('table_jabatans', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
