const express = require('express');
const schoolRoute = require('./school.route')
const classRoute = require('./class.route')
const studentRoute = require('./student.route')
const {homeController} = require('../../controllers/index');

const router = express.Router();

router.get('/', homeController.getHome);
router.use('/schools', schoolRoute);
router.use('/classes', classRoute);
router.use('/students', studentRoute);

module.exports = router;
