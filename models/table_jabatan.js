'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_jabatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  table_jabatan.init({
    id_department: DataTypes.INTEGER,
    nama_jabatan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'table_jabatan',
  });
  return table_jabatan;
};