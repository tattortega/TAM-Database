const rolesCtrl={}
const Roles = require('../models/roles.model')

//Agregar rol
rolesCtrl.crear = async(req,res)=>{
    try {
        const {roles_id, nombre_rol, descripción} = req.body
        const NuevoRol = new Roles({
            roles_id,
            nombre_rol,
            descripción
        })
        NuevoRol.save()
    } catch (error) {
        res.json({
            mensaje:'Error al crear el rol'
        }) 
    }

}

//Buscar roles
rolesCtrl.listar= async(req,res)=>{
    try {
        const respuesta = await Roles.find()
        res.json(respuesta)
    } catch (error) {
        res.json({
            mensaje: 'No se encuentran roles en la base de datos'
        })  
    }

}

//Buscar roles por Id
rolesCtrl.listarId= async(req,res)=>{
    try {
        const id = req.params.id
        const respuesta = await Roles.findById({_id: id})
        res.json(respuesta)
    } catch (error) {
        res.json({
            mensaje: 'No se encuentra el rol en la base de datos'
        })  
    }

}

//Eliminar roles
rolesCtrl.eliminar= async (req,res)=>{
    try {
        const id = req.params.id
        const respuesta = await Roles.findByIdAndRemove({_id:id})
        if(respuesta==null){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{
        res.json({
            mensaje: 'Rol eliminado'
            }) 
        }     
    } catch (error) {
        res.json({
            mensaje: 'No se encuentra el rol'
        }) 
    }

}

//Actualizar roles
rolesCtrl.actualizar= async (req,res)=>{
    try {
        const id = req.params.id
        await Roles.findByIdAndUpdate({_id:id}, req.body)
        res.json({
            mensaje: 'Rol actualizado'
        })
    } catch (error) {
        res.json({
            mensaje: 'Actualizado correctamente'
        }) 
    }

}

//Buscar según un criterio (filtrar)
rolesCtrl.buscarRolPorNombre = async(req,res)=>{
    const nombre= req.params.criterio;
    try {
        const respuesta = await Roles.find({nombre_rol:nombre})
        res.json(respuesta)
    } catch (error) {       
        return res.status(400).json({
            mensaje:'No se encuentra el nombre en la base de datos',
            error
        })
    }
}


module.exports = rolesCtrl