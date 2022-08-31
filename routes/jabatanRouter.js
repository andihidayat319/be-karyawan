const jabatanController = require('../controllers/jabatanController')
const jabatanRouter = require('express').Router()

jabatanRouter.get("/", jabatanController)
jabatanRouter.post("/", jabatanController)

module.exports = jabatanRouter