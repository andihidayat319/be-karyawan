const {table_jabatan} = require('../models')

class jabatanController {
  static async getJabatan(req, res, next){
    try {
      const jabatans = await table_jabatan.findAll({
        attributes: ['id','id_department','nama_jabatan']
      })
      res.status(200).json(jabatans)
    } catch (error) {
      next(error)
    }
  }
  static async getJabatanId(req, res, next){
    try {
      const jabatans = await table_jabatan.findAll({
        attributes: ['id','id_department','nama_jabatan'],
        where: {
          id_department: req.params.id
        }
      })
      res.status(200).json(jabatans)
    } catch (error) {
      next(error)
    }
  }
  static async postJabatan(req, res, next){
    const {id_department, nama_jabatan} = req.body
    try {
      const newJabatan = await table_jabatan.create({id_department, nama_jabatan})
      res.status(201).json({id: newJabatan.id, id_department: newJabatan.id_department, nama_jabatan: newJabatan.nama_jabatan})
    } catch (error) {
      next(error)
    }
  }
  static async deleteJabatan(req, res, next){
    try {
      const jabatan = await table_jabatan.findByPk(+req.params.id)
      if (!jabatan) throw {name: "Not Found"}
      await table_jabatan.destroy({
        where: {
            id: req.params.id
        }
      })
      res.status(200).json({"message" : `Jabatan ${jabatan.nama_jabatan} success to delete`})
    } catch (error) {
      next(error)
    }
  }
}
module.exports = jabatanController