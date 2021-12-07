const {Router} = require('express')
const router = Router()
const RolesCtrl= require('../controller/roles.controller')


router.get('/Roles', RolesCtrl.listar)
router.get('/Roles/:id', RolesCtrl.listarId)
router.get('/RolesPorNombre/:criterio', RolesCtrl.buscarRolPorNombre)
router.post('/Roles', RolesCtrl.crear)
router.put('/Roles/:id', RolesCtrl.actualizar)
router.delete('/Roles/:id', RolesCtrl.eliminar)

module.exports = router