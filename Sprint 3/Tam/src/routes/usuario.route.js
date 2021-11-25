const {Router} = require('express')
const router = Router()
const UsuarioCtrl= require('../controller/usuario.controller')
const Auto = require('../helper/Auto')


router.post('/Usuario',Auto.verificarToken, UsuarioCtrl.crear)
router.post('/login', UsuarioCtrl.login)
router.get('/Usuarios', UsuarioCtrl.listar)
router.get('/Usuarios/:id', UsuarioCtrl.listarId)
router.get('/UsuariosEstado/:criterio', UsuarioCtrl.buscarUsuarioEstado)
router.put('/Usuarios/:id', UsuarioCtrl.actualizar)
router.delete('/Usuarios/:id',Auto.verificarToken, UsuarioCtrl.eliminar)

module.exports = router