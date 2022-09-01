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
      table_jabatan.belongsTo(models.table_department, {
        foreignKey: "id_department"
      }),
      table_jabatan.hasMany(models.table_karyawan, {
        foreignKey: "id_jabatan"
      })
    }
  };
  table_jabatan.init({
    id_department: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "id_department cannot Empty"
        },
        notNull: {
          msg: "id_department cannot null"
        }
      }
    },
    nama_jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "nama_jabatan cannot Empty"
        },
        notNull: {
          msg: "nama_jabatan cannot null"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'table_jabatan',
  });
  return table_jabatan;
};