const usuarioCtrl={}
const Usuario = require('../models/usuario.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Crear usuario
usuarioCtrl.crear = async(req,res)=>{
    const {nombres,apellidos,correo,estado,roles_id,usuario,contraseña} = req.body
    const NuevoUsuario = new Usuario({
        nombres,
        apellidos,
        correo,
        estado,
        roles_id,
        usuario,
        contraseña
    })

    const correoUsuario = await Usuario.findOne({correo:correo})
    if(correoUsuario){
        res.json({
            mensaje: 'El correo ya existe'
        })
    }

    else{
        NuevoUsuario.contraseña = await bcrypt.hash(contraseña,10)
        const token = jwt.sign({_id:NuevoUsuario._id},'Secreta')
        await NuevoUsuario.save()
        res.json({
            mensaje:'Bienvenid@',
            id: NuevoUsuario._id,
            nombres:NuevoUsuario.nombres,
            token
        })

    }
}

//Validar inicio de sesion
usuarioCtrl.login = async(req,res)=>{
    const {correo,contraseña}=req.body
    const usuario = await Usuario.findOne({correo:correo})
    if(!usuario){

        return res.json({
            mensaje:'Correo incorrecto'
        })

    }
    
    const match = await bcrypt.compare(contraseña,usuario.contraseña)

    if(match){
        const token =jwt.sign({_id: usuario._id}, 'Secreta')
        res.json({
            mensaje:'Inicio de sesión exitoso',
            id: usuario.id,
            nombres: usuario.nombres,
            token
        })
    }
    else{
        res.json({
            mensaje:'Contraseña incorrecta'
        })
    }
}

//Buscar todos los usuarios
usuarioCtrl.listar= async(req,res)=>{
    const respuesta = await Usuario.find()
    res.json(respuesta)
}

//Buscar usuario por Id
usuarioCtrl.listarId= async(req,res)=>{
    const id = req.params._id
    const respuesta = await Usuario.findById({_id: id})
    res.json(respuesta)
}

//Eliminar usuario
usuarioCtrl.eliminar= async (req,res)=>{
    const id = req.params.id
    const respuesta = await Usuario.findByIdAndRemove({_id:id})
    if(respuesta==null){
        res.json({
            mensaje: 'El usuario no se encuentra en la base de datos'
        })
    }else{
        res.json({
            mensaje: 'Usuario eliminado'
        })
    }
}

//Actualizar usuario
usuarioCtrl.actualizar= async (req,res)=>{
    const id = req.params.id
    const respuesta = await Usuario.findByIdAndUpdate({_id:id}, req.body)
    if(respuesta==null){
        res.json({
            mensaje: 'El usuario no se encuentra en la base de datos'
        })
    }else{
        res.json({
            mensaje: 'Usuario eliminado'
        })
    }
}

//Consultar por estado
usuarioCtrl.buscarUsuarioEstado = async(req,res)=>{
    const estado= req.params.estado;

    try {
        const respuesta = await Usuario.find({estado:estado})
        res.json(respuesta)
    } catch (error) {
        
        return res.status(400).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}
//Consultar por nombre
usuarioCtrl.buscarNombre = async(req,res)=>{
    const nombres= req.params.nombres;
    try {
        const respuesta = await DatosBiologicos.find({nombres:nombres})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
             
    } catch (error) {       
        return res.status(400).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}
//Consultar por apellido
usuarioCtrl.buscarApellido = async(req,res)=>{
    const apellidos= req.params.apellidos;
    try {
        const respuesta = await DatosBiologicos.find({apellidos:apellidos})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
             
    } catch (error) {       
        return res.status(400).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}

//Consultar por correo
usuarioCtrl.buscarCorreo = async(req,res)=>{
    const correo= req.params.correo;
    try {
        const respuesta = await DatosBiologicos.find({correo:correo})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
             
    } catch (error) {       
        return res.status(400).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}

//Consultar por usuario
usuarioCtrl.buscarUsuario = async(req,res)=>{
    const usuario= req.params.usuario;
    try {
        const respuesta = await DatosBiologicos.find({usuario:usuario})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
             
    } catch (error) {       
        return res.status(400).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}



module.exports = usuarioCtrl