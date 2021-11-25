const rolesCtrl={}
const Roles = require('../models/roles.model')

rolesCtrl.crear = async(req,res)=>{
    const {roles_id, nombre_rol, descripción} = req.body
    const NuevoRol = new Roles({
        roles_id,
        nombre_rol,
        descripción
    })
}

//Buscar roles
rolesCtrl.listar= async(req,res)=>{
    const respuesta = await Roles.find()
    res.json(respuesta)
}

//Buscar roles por Id
rolesCtrl.listarId= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Roles.findById({_id: id})
    res.json(respuesta)
}

//Eliminar roles
rolesCtrl.eliminar= async (req,res)=>{
    const id = req.params.id
    await Roles.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Rol eliminado'
    })
}

//Actualizar roles
rolesCtrl.actualizar= async (req,res)=>{
    const id = req.params.id
    await Roles.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje: 'Rol actualizado'
    })
}

//Buscar según un criterio (filtrar)
rolesCtrl.buscarRolPorNombre = async(req,res)=>{
    const nombre= req.params.criterio;

    try {
        const respuesta = await Roles.find({nombre_rol:nombre})
        res.json(respuesta)
    } catch (error) {
        
        return res.status(400).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}


module.exports = rolesCtrl