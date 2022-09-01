const jabatanController = require('../controllers/jabatanController')
const jabatanRouter = require('express').Router()

jabatanRouter.get("/", jabatanController.getJabatan)
jabatanRouter.post("/", jabatanController.postJabatan)
jabatanRouter.get("/:id", jabatanController.getJabatanId)
jabatanRouter.delete("/:id", jabatanController.deleteJabatan)

module.exports = jabatanRouter