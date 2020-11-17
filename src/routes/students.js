const express = require('express');
const router = express.Router();
const StudentContrroller = require('../controllers/StudentController');

router.get('/', StudentContrroller.index);

router.post('/', StudentContrroller.store);

router.get('/:id_aluno', StudentContrroller.findById);

router.put('/:id_aluno', StudentContrroller.update);

router.delete('/:id_aluno', StudentContrroller.delete);

module.exports = router;


