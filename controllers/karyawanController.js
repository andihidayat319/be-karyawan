const {table_karyawan, table_jabatan, table_department} = require('../models')

class karyawanController {
  static async getKaryawans(req, res, next){
    try {
      const karyawans = await table_karyawan.findAll({include: [{ 
        model: table_jabatan,
        attributes: ['nama_jabatan'],
        include: [{
          model: table_department,
          attributes: ['nama_department']
        }]
      }],
    attributes: {exclude: ['createdAt','updatedAt']}
    })
      res.status(200).json(karyawans)
    } catch (error) {
      next(error)
    }
  }
  static async postKaryawan(req, res, next){
    const {name, id_jabatan, age, gender, tanggal_lahir, alamat} = req.body
    try {
      const newKaryawan = await table_karyawan.create({name, id_jabatan, age, gender, tanggal_lahir, alamat})
      res.status(201).json(newKaryawan)
    } catch (error) {
      next(error)
    }
  }
  static async detailKaryawan(req, res, next) {
    try {
      const karyawan = await table_karyawan.findByPk(+req.params.id,{attributes: {exclude: ['createdAt','updatedAt']}})
      if (!karyawan) throw {name: "Not Found"}
      res.status(200).json(karyawan)
    } catch (error) {
      next(error)
    }
  }
  static async editKaryawan (req, res, next){
    const {name, id_jabatan, age, gender, tanggal_lahir, alamat} = req.body
    try {
      const karyawan = await table_karyawan.findByPk(+req.params.id)
      if (!karyawan) throw {name: "Not Found"}
      const editKaryawan = await table_karyawan.update({
          name, id_jabatan, age, gender, tanggal_lahir, alamat           
        }, {
            where: {
              id: req.params.id
            },
            returning: true
        })
      res.status(200).json(editKaryawan[1][0])
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
  static async deleteKaryawan(req, res, next){
    try {
      const karyawan = await table_karyawan.findByPk(+req.params.id)
      if (!karyawan) throw {name: "Not Found"}
      await table_karyawan.destroy({
        where: {
            id: req.params.id
        }
      })
      res.status(200).json({"message" : `Karyawan ${karyawan.nama} success to delete`})
    } catch (error) {
      next(error)
    }
  }
}
module.exports = karyawanController