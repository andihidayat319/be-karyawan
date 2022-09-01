const departmentController = require('../controllers/departmentController')
const departmentRouter = require('express').Router()

departmentRouter.get("/", departmentController.getDepartment)
departmentRouter.post("/", departmentController.postDepartment)
departmentRouter.delete("/:id", departmentController.deleteDepartment)

module.exports = departmentRouter