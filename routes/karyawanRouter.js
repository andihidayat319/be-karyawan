const karyawanController = require('../controllers/karyawanController')
const karyawanRouter = require('express').Router()

karyawanRouter.get('/', karyawanController.getKaryawans)
karyawanRouter.post('/', karyawanController.postKaryawan)
karyawanRouter.get('/:id', karyawanController.detailKaryawan)
karyawanRouter.put('/:id', karyawanController.editKaryawan)
karyawanRouter.delete('/:id', karyawanController.deleteKaryawan)

module.exports = karyawanRouter