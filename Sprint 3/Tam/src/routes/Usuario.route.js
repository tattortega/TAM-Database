const {Router} = require('express')
const router = Router()
const UsuarioCtrl= require('../controller/Usuario.controller')
const Auto = require('../helper/Auto')


router.post('/crear',Auto.verificarToken, UsuarioCtrl.crear)
router.post('/login', UsuarioCtrl.login)
router.get('/listarUsuarios', UsuarioCtrl.listar)
router.get('/listar/:id', UsuarioCtrl.listarId)
router.get('/listarEstado/:criterio', UsuarioCtrl.buscarUsuarioEstado)
router.delete('/eliminar/:id',Auto.verificarToken, UsuarioCtrl.eliminar)
router.put('/actualizar/:id', UsuarioCtrl.actualizar)

module.exports = router