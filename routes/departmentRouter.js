const departmentController = require('../controllers/departmentController')
const departmentRouter = require('express').Router()

departmentRouter.get("/", departmentController)
departmentRouter.post("/", departmentController)

module.exports = departmentRouter