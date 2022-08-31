'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('table_karyawans', [{
      name: 'Habib Rahmat',
      id_jabatan: 1,
      age: 26,
      gender: 'L',
      tanggal_lahir: '22-06-1994',
      alamat: 'Jl. Alhambra',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /**
     * 
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
    await queryInterface.bulkDelete('table_karyawans', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
