const {Router} = require('express')
const router = Router()
const DatosBiologicosCtrl = require('../controller/datosbiologicos.controller.js')

router.get('/DatosBiologicos',DatosBiologicosCtrl.buscar_todos)
router.get('/DatoBiologico/:id',DatosBiologicosCtrl.buscar_por_id)
router.post('/DatosBiologicos',DatosBiologicosCtrl.crear)
router.put('/DatosBiologicos/:id',DatosBiologicosCtrl.actualizar)
router.delete('/DatosBiologicos/:id',DatosBiologicosCtrl.eliminar)




module.exports = router