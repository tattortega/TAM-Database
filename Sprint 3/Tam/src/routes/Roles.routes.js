const {Router} = require('express')
const router = Router()
const RolesCtrl= require('../controller/Roles.controller')


router.post('/crear', RolesCtrl.crear)
router.get('/listarRoles', RolesCtrl.listar)
router.get('/listar/:id', RolesCtrl.listarId)
router.get('/listarPorNombre/:criterio', RolesCtrl.buscarRolPorNombre)
router.delete('/eliminar/:id', RolesCtrl.eliminar)
router.put('/actualizar/:id', RolesCtrl.actualizar)

module.exports = router