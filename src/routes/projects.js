const { Router } = require('express');
//const { check } = require('express-validator');

const { projectsGet } = require('../controllers/projects');

const router = Router();


router.get('/', projectsGet);

module.exports = router;