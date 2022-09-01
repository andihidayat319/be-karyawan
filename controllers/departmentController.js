const {table_department} = require('../models')

class departmentController {
  static async getDepartment(req, res, next){
    try {
      const departments = await table_department.findAll({attributes: ['id','nama_department']})
      res.status(200).json(departments)
    } catch (error) {
      next(error)
    }
  }
  static async postDepartment(req, res, next){
    const {nama_department} = req.body
    try {
      const newDepartment = await table_department.create({nama_department})
      res.status(201).json({id: newDepartment.id, nama_department: newDepartment.nama_department})
    } catch (error) {
      next(error)
    }
  }
  static async deleteDepartment(req, res, next){
    try {
      const department = await table_department.findByPk(+req.params.id)
      if (!department) throw {name: "Not Found"}
      await table_department.destroy({
        where: {
            id: req.params.id
        }
      })
      res.status(200).json({"message" : `Department ${department.nama_department} success to delete`})
    } catch (error) {
      next(error)
    }
  }
}
module.exports = departmentController