const express = require('express');
const router = express.Router();
const {studentController} = require('../../controllers/index');

router.get('/', studentController.getAll);
router.get('/create', studentController.showFormCreate);
router.post('/create', studentController.create);

router.get('/edit/:id', studentController.showFormEdit);
router.post('/update/:id', studentController.update);

router.get('/delete/:id', studentController.delete);

module.exports = router;