const soporteCtrl = {};
const Soporte = require('../models/soporte.model');

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
        res.send('Registro de soporte creado');

    } catch (error) {
        res.send('No se pudo crear el registro');
    } 
};

//Consultar todos los reportes
soporteCtrl.getSoportes = async (req,res)=>{
    try {
        const soporte = await Soporte.find({});
        res.json(soporte);
    } catch (error) {
        res.send('No se encuentra ningun registro');
    } 
};

//Consultar soporte por id
soporteCtrl.getSoporte = async (req,res)=>{ 
    try {
        const soporte = await Soporte.find({_id:req.params._id});
        res.json(soporte);
    } catch (error) {
        res.send('No se encuentra el registro');
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
            res.send('Registro de soporte actualizado');
        
    } catch (error) {
        res.send('No se pudo actualizar el registro');
    } 
};

//Eliminar soporte
soporteCtrl.deleteSoporte = async (req,res)=>{
    try {
        await Soporte.deleteOne({_id:req.params._id});
        res.send('Registro de soporte eliminado');
    } catch (error) {
        res.send('No se pudo eliminar el registro');
    } 
};


module.exports = soporteCtrl;