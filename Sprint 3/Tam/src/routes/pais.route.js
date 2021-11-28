const {Router} = require('express');
const router = Router();

const{getPaises,getPais,createPais,editPais,deletePais} = require('../controller/pais.controller');

router.get('/Paises',getPaises);
router.get('/Paises/:id_pais',getPais);
router.post('/Paises',createPais);
router.put('/Paises/:id_pais',editPais);
router.delete('/Paises/:id_pais',deletePais);


module.exports = router;