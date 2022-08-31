const router = require('express').Router()
const errorHandler = require('../middlewares/errorHandler')
const departmentRouter = require('./departmentRouter')
const jabatanRouter = require('./jabatanRouter')
const karyawanRouter = require('./karyawanRouter')

router.use("/department", departmentRouter)
router.use("/jabatan", jabatanRouter)
router.use("/karyawan", karyawanRouter)

router.use(errorHandler)

module.exports = router