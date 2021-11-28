const {Router} = require('express');
const router = Router();

const{getSoportes,getSoporte,createSoporte,editSoporte,deleteSoporte} = require('../controller/soporte.controller');

router.get('/Soportes',getSoportes);
router.get('/Soportes/:_id',getSoporte);
router.post('/Soportes',createSoporte);
router.put('/Soportes/:_id',editSoporte);
router.delete('/Soportes/:_id',deleteSoporte);


module.exports = router;