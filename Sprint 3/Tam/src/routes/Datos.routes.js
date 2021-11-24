const {Router} = require('express')
const router = Router()
const DatosCtrl= require('../controller/Datos.controller')

router.post('/crear', DatosCtrl.crear)
router.get('/listarDatos', DatosCtrl.listarDatos)
router.get('/listar/:id', DatosCtrl.listarId)
router.get('/listarPorKey/:id', DatosCtrl.listarPorUsuario)
router.get('/listarPorPais/:id', DatosCtrl.listarPorPais)
router.delete('/eliminar/:id', DatosCtrl.eliminar)
router.put('/actualizar/:id', DatosCtrl.actualizar)
router.get('/listarlatitud/:criterio', DatosCtrl.buscarDatoLatitud)
router.get('/listarlatitud/:criterio', DatosCtrl.buscarDatoLongitud)
router.get('/listarlatitud/:criterio', DatosCtrl.buscarDatoElevacion)


module.exports = router