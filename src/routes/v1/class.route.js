const express = require('express');
const router = express.Router();
const {classController} = require('../../controllers/index');

router.get('/', classController.getAll);

router.get('/create', classController.showFormCreate);
router.post('/create', classController.create);

router.get('/edit/:id', classController.showFormEdit);
router.post('/update/:id', classController.update);

router.get('/delete/:id', classController.delete);

router.get('/detail/:id', classController.detail);

router.get('/findClassesBySchoolID/:schoolID', classController.findClassesBySchoolID);

module.exports = router;