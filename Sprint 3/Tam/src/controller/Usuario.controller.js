const usuarioCtrl={}
const Usuario = require('../models/usuario.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Crear usuario
usuarioCtrl.crear = async(req,res)=>{
        try {
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
        const nombreUsuario = await Usuario.findOne({usuario:usuario})
        if(correoUsuario){
            res.json({
                mensaje: 'El correo ya existe'
            })
        }else if(nombreUsuario){
            res.json({
                mensaje: 'El usuario ya existe'
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
    } catch (error) {
        res.json({
            mensaje:'Error al crear el usuario'
        }) 
    }
}

//Validar inicio de sesion
usuarioCtrl.login = async(req,res)=>{
    try {
        const {usuario,contraseña}=req.body
        const validarUsuario = await Usuario.findOne({usuario:usuario})
        if(!validarUsuario){
            return res.json({
                mensaje:'Correo incorrecto'
            })
        }
        
        const match = await bcrypt.compare(contraseña,validarUsuario.contraseña)
    
        if(match){
            const token =jwt.sign({_id: validarUsuario._id}, 'Secreta')
            res.json({
                mensaje:'Inicio de sesión exitoso',
                id: validarUsuario.id,
                nombres: validarUsuario.nombres,
                token
            })
        }
        else{
            res.json({
                mensaje:'Contraseña incorrecta'
            })
        }
            
    } catch (error) {
        res.json({
            mensaje: 'Error al iniciar sesion'
        })        
    }
}

//Buscar todos los usuarios
usuarioCtrl.listar= async(req,res)=>{
    try {
        const respuesta = await Usuario.find()
        res.json(respuesta)
    } catch (error) {
        res.json({
            mensaje: 'No se encuentran usuarios en la base de datos'
        })      
    }
}

//Buscar usuario por Id
usuarioCtrl.listarId= async(req,res)=>{
    try {       
        const id = req.params._id
        const respuesta = await Usuario.findById({_id: id})
        res.json(respuesta)
    } catch (error) {
        res.json({
            mensaje: 'No se encuentra el usuario en la base de datos'
        })         
    }
}

//Eliminar usuario
usuarioCtrl.eliminar= async (req,res)=>{
    try {
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
    } catch (error) {
        res.json({
            mensaje: 'El usuario no se encuentra en la base de datos'
        })
    }
}

//Actualizar usuario
usuarioCtrl.actualizar= async (req,res)=>{
    try {
        const usuarioActualizado = {
            id:req.body._id,
            nombres:req.body.nombres,
            apellidos:req.body.apellidos,
            correo:req.body.correo,
            estado:req.body.estado,
            roles_id:req.body.roles_id,
            usuario:req.body.usuario,
            contraseña: await bcrypt.hash(req.body.contraseña,10)
        }
        await Usuario.findByIdAndUpdate({_id:req.params.id}, usuarioActualizado)
        res.json({
            mensaje:'Usuario actualizado'
        })   
    } catch (error) {
            res.json({
                mensaje: 'El usuario no se encuentra en la base de datos'
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
        const respuesta = await Usuario.find({nombres:nombres})
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
        const respuesta = await Usuario.find({apellidos:apellidos})
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
        const respuesta = await Usuario.find({correo:correo})
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
        const respuesta = await Usuario.find({usuario:usuario})
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