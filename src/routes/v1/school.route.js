const express = require('express');
const router = express.Router();
const {schoolController} = require('../../controllers/index');

router.get('/create', schoolController.showFormCreate);
router.post('/create', schoolController.create);

router.get('/edit/:id', schoolController.showFormEdit);
router.post('/update/:id', schoolController.update);

router.get('/delete/:id', schoolController.delete);

router.get('/detail/:id', schoolController.detail);

router.get('/', schoolController.getAll);

module.exports = router;