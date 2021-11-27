const {Router} = require('express')
const router = Router()
const UsuarioCtrl= require('../controller/usuario.controller')
const Auto = require('../helper/Auto')


router.post('/Usuario', UsuarioCtrl.crear)
router.post('/login', UsuarioCtrl.login)
router.get('/Usuarios', UsuarioCtrl.listar)
router.get('/Usuario/:_id', UsuarioCtrl.listarId)
router.get('/Usuarios/Estado/:estado', UsuarioCtrl.buscarUsuarioEstado)
router.get('/Usuarios/Nombres/:nombres', UsuarioCtrl.buscarNombre)
router.get('/Usuarios/Apellidos/:apellidos', UsuarioCtrl.buscarApellido)
router.get('/Usuarios/Correo/:correo', UsuarioCtrl.buscarCorreo)
router.get('/Usuarios/Usuario/:usuario', UsuarioCtrl.buscarUsuario)
router.put('/Usuarios/:id', UsuarioCtrl.actualizar)
router.delete('/Usuarios/:id', UsuarioCtrl.eliminar)

module.exports = router