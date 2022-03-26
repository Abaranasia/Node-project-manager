const { Router } = require('express');
//const { check } = require('express-validator');

const { projectsGet, projectGet } = require('../controllers/projects');

const router = Router();


router.get('/', projectsGet); // Lists all projects

router.get('/:id', projectGet); // Lists one specific project by id

module.exports = router;