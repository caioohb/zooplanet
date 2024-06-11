const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/cadastrar', userController.cadastrar);
router.post('/login', userController.login);
router.patch('/editar', userController.editar);
router.get('/perfil', userController.perfil);
router.delete('/deletar', userController.deletar);

module.exports = router;
