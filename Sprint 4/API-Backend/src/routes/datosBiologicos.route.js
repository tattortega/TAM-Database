const {Router} = require('express')
const router = Router()
const Auto = require('../helper/Auto')
const DatosBiologicosCtrl = require('../controller/datosBiologicos.controller.js')

router.get('/DatosBiologicos',DatosBiologicosCtrl.buscar_todos)
router.get('/DatoBiologico/:id',DatosBiologicosCtrl.buscar_por_id)
router.get('/DatosBiologicos/genero_parasito/:genero_parasito',DatosBiologicosCtrl.buscarParasito)
router.get('/DatosBiologicos/key_usuario/:key_usuario',DatosBiologicosCtrl.buscarUsuario)
router.get('/DatosBiologicos/latitud/:latitud',DatosBiologicosCtrl.buscarLatitud)
router.get('/DatosBiologicos/longitud/:longitud',DatosBiologicosCtrl.buscarLongitud)
router.get('/DatosBiologicos/elevacion/:elevacion',DatosBiologicosCtrl.buscarElevacion)
router.get('/DatosBiologicos/localidad/:localidad',DatosBiologicosCtrl.buscarLocalidad)
router.get('/DatosBiologicos/codigo_genbank/:codigo_genbank',DatosBiologicosCtrl.buscarCodigoGenbank)
router.get('/DatosBiologicos/marcador_molecular/:marcador_molecular',DatosBiologicosCtrl.buscarMarcadorMolecular)
router.get('/DatosBiologicos/orden/:orden',DatosBiologicosCtrl.buscarOrden)
router.get('/DatosBiologicos/especie/:especie',DatosBiologicosCtrl.buscarEspecie)
router.get('/DatosBiologicos/familia/:familia',DatosBiologicosCtrl.buscarFamilia)
router.get('/DatosBiologicos/id_pais/:id_pais',DatosBiologicosCtrl.buscarPais)
router.get('/DatosBiologicos/bibliographic_ref/:bibliographic_ref',DatosBiologicosCtrl.buscarRefBiblio)
router.post('/DatosBiologicos', DatosBiologicosCtrl.crear)
router.put('/DatosBiologicos/:id',DatosBiologicosCtrl.actualizar)
router.delete('/DatosBiologicos/:id',DatosBiologicosCtrl.eliminar)




module.exports = router;
