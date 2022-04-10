const { Router } = require('express');
//const { check } = require('express-validator');

const { employeesGet, employeeGet, employeePost } = require('../controllers/employees');

const router = Router();


router.get('/', employeesGet); // Lists all the employees

router.get('/:id', employeeGet); // Lists one specific employee by id

router.post('/', employeePost);


module.exports = router;