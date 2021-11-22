const {Router} = require('express');
const router = Router();

const{getSoportes,getSoporte,createSoporte,editSoporte,deleteSoporte} = require('../controller/soporte.controller');

router.get('/soportes',getSoportes);
router.get('/soporte/:_id',getSoporte);
router.post('/soporte',createSoporte);
router.put('/soporte/:_id',editSoporte);
router.delete('/soporte/:_id',deleteSoporte);


module.exports = router;