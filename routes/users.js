const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController')

/* GET users listing. */
router.get('/', usuariosController.index); 

/*
{
  res.send('respond with a resource');
});*/

module.exports = router;
