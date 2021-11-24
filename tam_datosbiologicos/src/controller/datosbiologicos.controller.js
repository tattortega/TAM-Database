const datosbiologicosCtrl = {};
const DatosBiologicos = require('../model/datosbiologicos.model');

datosbiologicosCtrl.getDatos_biologicos = async (req,res)=>{
    try {
        const datosBiologicos = await DatosBiologicos.find({});
        res.json(datosBiologicos);
    } catch (error) {
        console.log(error);
    } 
};

datosbiologicosCtrl.getDato_biologico = async (req,res)=>{
    res.send("GetDato_biologico");
};

datosbiologicosCtrl.createDato_biologico = async (req,res)=>{
    res.send("CreateDato_biologico");
};

datosbiologicosCtrl.editDato_biologico = async (req,res)=>{
    res.send("EditDato_biologico");
};

datosbiologicosCtrl.deleteDato_biologico = async (req,res)=>{
    res.send("DeleteDato_biologico");
};

module.exports = datosbiologicosCtrl;