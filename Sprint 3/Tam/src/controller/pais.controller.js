const paisCtrl = {};
const Pais = require('../models/pais.model');

//Crear pais
paisCtrl.createPais = async (req,res)=>{ 
    try {
        const paisTemp = {
            id_pais:req.body.id_pais,
            nombre:req.body.nombre,
        }
        let _pais = new Pais(paisTemp);
        await _pais.save();
        res.send('Creado correctamente');

    } catch (error) {
        res.send('No se pudo crear el pais');
    } 
};

//Consultar todos los paises
paisCtrl.getPaises = async (req,res)=>{
    try {
        const pais = await Pais.find({});
        res.json(pais);
    } catch (error) {
        res.send('No se encuentran paises');
    } 
};

//Consultar pais por id
paisCtrl.getPais = async (req,res)=>{ 
    try {
        const pais = await Pais.find({id_pais:req.params.id_pais});
        res.json(pais);
    } catch (error) {
        res.send('No se encuentra el pais');
    } 
};



//Actualizar pais
paisCtrl.editPais = async (req,res)=>{
    try {
        const paisTemp = {
            id_pais:req.body.id_pais,
            nombre:req.body.nombre,
        }
        await Pais.updateOne({id_pais:req.params.id_pais},paisTemp);
            res.send('Actualizado correctamente');
        
    } catch (error) {
        res.send('No se pudo actualizar el pais');
    } 
};

//Eliminar pais
paisCtrl.deletePais = async (req,res)=>{
    try {
        const id_pais = req.params.id_pais
        const respuesta = await Pais.deleteOne({id_pais:id_pais});
        if(respuesta==count){
            res.send({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{
        res.send('Eliminado correctamente');
        }
    } catch (error) {
        res.send('No se pudo eliminar el pais');
    } 
};


module.exports = paisCtrl;