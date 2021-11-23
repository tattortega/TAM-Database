const datosbiologicosCtrl = {};

datosbiologicosCtrl.getDatos_biologicos = async (req,res)=>{
   res.send("GetDatos_biologicos");
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