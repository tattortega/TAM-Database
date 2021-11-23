const {Router} = require('express');
const router = Router();

const {getDatos_biologicos,getDato_biologico,createDato_biologico,editDato_biologico,deleteDato_biologico} = require('../controller/datosbiologicos.controller');

router.get('/datosbiologicos',getDatos_biologicos);
router.get('/datobiologico/:_id',getDato_biologico);
router.post('/datobiologico',createDato_biologico);
router.put('/datobiologico/:_id',editDato_biologico);
router.delete('/datobiologico/:_id',deleteDato_biologico);

module.exports = router;