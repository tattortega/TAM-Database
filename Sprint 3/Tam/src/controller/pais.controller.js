const paisCtrl = {};
const Pais = require('../models/pais.model');

paisCtrl.getPaises = async (req,res)=>{
    try {
        const pais = await Pais.find({});
        res.json(pais);
    } catch (error) {
        console.log(error);
    } 
};

paisCtrl.getPais = async (req,res)=>{ 
    try {
        const pais = await Pais.find({id_pais:req.params.id_pais});
        res.json(pais);
    } catch (error) {
        console.log(error);
    } 
};

paisCtrl.createPais = async (req,res)=>{ 
    try {
        const paisTemp = {
            id_pais:req.body.id_pais,
            nombre:req.body.nombre,
        }
        let _pais = new Pais(paisTemp);
        await _pais.save();
        res.send('creado');

    } catch (error) {
        console.log(error);
    } 
};

paisCtrl.editPais = async (req,res)=>{
    try {
        const paisTemp = {
            id_pais:req.body.id_pais,
            nombre:req.body.nombre,
        }
        await Pais.updateOne({id_pais:req.params.id_pais},paisTemp);
            res.send('actualizado');
        
    } catch (error) {
        console.log(error);
    } 
};

paisCtrl.deletePais = async (req,res)=>{
    try {
        await Pais.deleteOne({id_pais:req.params.id_pais});
        res.send('Eliminado');
    } catch (error) {
        console.log(error);
    } 
};


module.exports = paisCtrl;