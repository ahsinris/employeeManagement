const router = require('express').Router()

const { create_employees, edit_employee, get_all_employees, soft_delete } = require('../controller/employee.controller')

router.post('/create_employees', create_employees)

router.put('/update_employees', edit_employee)

router.get('/get_all_employees', get_all_employees)

router.put('/soft_delete', soft_delete)

const { add_attedence } = require('../controller/attedence.controller')

router.post('/add_attedence', add_attedence)

module.exports = router

