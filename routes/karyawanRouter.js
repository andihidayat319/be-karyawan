const karyawanController = require('../controllers/karyawanController')
const karyawanRouter = require('express').Router()

karyawanRouter.get('/', karyawanController)
karyawanRouter.post('/', karyawanController)
karyawanRouter.put('/:id', karyawanController)
karyawanRouter.del('/:id', karyawanController)

module.exports = karyawanRouter