const DatosBiologicosCtrl={}
const DatosBiologicos = require('../models/datosbiologicos.models.js')

DatosBiologicosCtrl.crear = async(req,res)=>{

    const {key_usuario,latitud,longitud,localidad,elevacion,codigo_genbank,marcador_molecular,orden,especie,familia,genero_parasito,bibliographic_ref,id_pais} = req.body

    const NuevosDatosBiologicos = DatosBiologicos({
        key_usuario,
        latitud,
        longitud,
        localidad,
        elevacion,
        codigo_genbank,
        marcador_molecular,
        orden,
        especie,
        familia,
        genero_parasito,
        bibliographic_ref,
        id_pais
    })

    const respuesta = await NuevosDatosBiologicos.save()
    res.json({
        mensaje:'Datos biologicos registrados'
        
    })
}
//Consultar todos los datos biologicos
DatosBiologicosCtrl.buscar_todos = async(req,res)=>{
    const respuesta = await DatosBiologicos.find()
    res.json(respuesta)
}

DatosBiologicosCtrl.buscar_por_id = async(req,res)=>{
    const id = req.params.id
    const respuesta = await DatosBiologicos.findById({_id: id})
    res.json(respuesta)
}

DatosBiologicosCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    const respuesta = await DatosBiologicos.findByIdAndRemove({_id: id})
    res.json({
        mensaje: 'Datos biológicos eliminados'
    })
}

DatosBiologicosCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    const respuesta = await DatosBiologicos.findByIdAndUpdate({_id: id},req.body)
    res.json({
        mensaje: 'Datos biológicos actualizados'
    })
}



module.exports = DatosBiologicosCtrl
