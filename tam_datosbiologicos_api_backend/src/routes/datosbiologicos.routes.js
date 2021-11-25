const {Router} = require('express')
const router = Router()
const DatosBiologicosCtrl = require('../controller/datosbiologicos.controller.js')

router.post('/crearDatosBiologicos',DatosBiologicosCtrl.crear)
router.get('/consultarDatosBiologicos',DatosBiologicosCtrl.buscar_todos)
router.get('/consultarDatosBiologicosID/:id',DatosBiologicosCtrl.buscar_por_id)
router.delete('/eliminarDatosBiologicos/:id',DatosBiologicosCtrl.eliminar)
router.put('/actualizarDatosBiologicos/:id',DatosBiologicosCtrl.actualizar)



module.exports = router