const {Router} = require('express');
const router = Router();

const{getPaises,getPais,createPais,editPais,deletePais} = require('../controller/pais.controller');

router.get('/paises',getPaises);
router.get('/pais/:id_pais',getPais);
router.post('/pais',createPais);
router.put('/pais/:id_pais',editPais);
router.delete('/pais/:id_pais',deletePais);


module.exports = router;