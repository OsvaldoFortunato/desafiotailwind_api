const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/clienteController.js')

router.post('/cliente', ClienteController.criarCliente);
router.get("/clientes", ClienteController.todosClientes);
router.get("/totalclientes", ClienteController.totalDeClientes);


module.exports = router