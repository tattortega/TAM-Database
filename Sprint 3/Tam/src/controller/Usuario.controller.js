const usuarioCtrl={}
const Usuario = require('../models/Usuario.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

//Buscar usuarios
usuarioCtrl.listar= async(req,res)=>{
    const respuesta = await Usuario.find()
    res.json(respuesta)
}

//Buscar usuario por Id
usuarioCtrl.listarId= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Usuario.findById({_id: id})
    res.json(respuesta)
}

//Eliminar usuario
usuarioCtrl.eliminar= async (req,res)=>{
    const id = req.params.id
    await Usuario.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Usuario eliminado'
    })
}

//Actualizar usuario
usuarioCtrl.actualizar= async (req,res)=>{
    const id = req.params.id
    await Usuario.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje: 'Usuario actualizado'
    })
}

//Buscar según un criterio (filtrar)
usuarioCtrl.buscarUsuarioEstado = async(req,res)=>{
    const estado= req.params.criterio;

    try {
        const respuesta = await Usuario.find({estado:estado})
        res.json(respuesta)
    } catch (error) {
        
        return res.status(400).json({
            mensaje:'Ucurrió un error',
            error
        })
    }
}


module.exports = usuarioCtrl