const datosCtrl={}
const Datos = require('../models/Datos.model')
const bcrypt = require('bcryptjs')

datosCtrl.crear = async(req,res)=>{
    const {key_usuario,latitud,longitud,localidad,elevacion,id_pais,codigo_genbank,marcador_molecular,orden_ave,especie_ave,familia_ave,genero_parasito,bibliografia} = req.body
    const NuevosDatos = new Datos({
        key_usuario,
        latitud,
        longitud,
        localidad,
        elevacion,
        id_pais,
        codigo_genbank,
        marcador_molecular,
        orden_ave,
        especie_ave,
        familia_ave,
        genero_parasito,
        bibliografia
    })


    const respuesta = await NuevosDatos.save()
    res.json({
        mensaje:'Datos ingresados',
        respuesta
    })
}

//Buscar datos
datosCtrl.listarDatos= async(req,res)=>{
    const respuesta = await Datos.find()
    res.json(respuesta)
}



//Buscar datos por Id
datosCtrl.listarId= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Datos.findById({_id: id})
    res.json(respuesta)
}

//Buscar datos por Usuario
datosCtrl.listarPorUsuario = async(req,res)=>{
    const id = req.params.id;
    const respuesta = await Datos.find({key_usuario:id})
    res.json (respuesta)
}

//Buscar datos por País
datosCtrl.listarPorPais = async(req,res)=>{
    const id = req.params.id;
    const respuesta = await Datos.find({id_pais:id})
    res.json (respuesta)
}


//Eliminar datos
datosCtrl.eliminar= async (req,res)=>{
    const id = req.params.id
    await Datos.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Datos eliminados'
    })
}

//Actualizar datos
datosCtrl.actualizar= async (req,res)=>{
    const id = req.params.id
    await Datos.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje: 'Datos actualizado'
    })
}

//Buscar según un criterio (filtrar)
datosCtrl.buscarDatoLatitud = async(req,res)=>{
    const latitud= req.params.criterio;

    try {
        const respuesta = await Datos.find({latitud:latitud})
        res.json(respuesta)
    } catch (error) {
        
        return res.status(400).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}

datosCtrl.buscarDatoLongitud = async(req,res)=>{
    const longitud= req.params.criterio;

    try {
        const respuesta = await Datos.find({longitud:longitud})
        res.json(respuesta)
    } catch (error) {
        
        return res.status(400).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}

datosCtrl.buscarDatoElevacion = async(req,res)=>{
    const elevacion= req.params.criterio;

    try {
        const respuesta = await Datos.find({elevacion:elevacion})
        res.json(respuesta)
    } catch (error) {
        
        return res.status(400).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}


module.exports = datosCtrl