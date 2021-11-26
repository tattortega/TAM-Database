const soporteCtrl = {};
const Soporte = require('../models/soporte.model');

//Consultar todos los reportes
soporteCtrl.getSoportes = async (req,res)=>{
    try {
        const soporte = await Soporte.find({});
        res.json(soporte);
    } catch (error) {
        console.log(error);
    } 
};

//Consultar soporte por id
soporteCtrl.getSoporte = async (req,res)=>{ 
    try {
        const soporte = await Soporte.find({_id:req.params._id});
        res.json(soporte);
    } catch (error) {
        console.log(error);
    } 
};

//Crear soporte
soporteCtrl.createSoporte = async (req,res)=>{ 
    try {
        const soporteTemp = {
            usuario:req.body.usuario,
            identificacion:req.body.identificacion,
            correo:req.body.correo,
            descripcion:req.body.descripcion,
        }
        let _soporte = new Soporte(soporteTemp);
        await _soporte.save();
        res.send('creado');

    } catch (error) {
        console.log(error);
    } 
};

//Actualizar soporte
soporteCtrl.editSoporte = async (req,res)=>{
    try {
        const soporteTemp = {
            usuario:req.body.usuario,
            identificacion:req.body.identificacion,
            correo:req.body.correo,
            descripcion:req.body.descripcion,
        }
        await Soporte.updateOne({_id:req.params._id},
            soporteTemp);
            res.send('actualizado');
        
    } catch (error) {
        console.log(error);
    } 
};

//Eliminar soporte
soporteCtrl.deleteSoporte = async (req,res)=>{
    try {
        await Soporte.deleteOne({_id:req.params._id});
        res.send('Eliminado');
    } catch (error) {
        console.log(error);
    } 
};


module.exports = soporteCtrl;