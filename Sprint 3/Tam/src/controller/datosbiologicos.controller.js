const DatosBiologicosCtrl={}
const DatosBiologicos = require('../models/datosBiologicos.models.js')

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

//Consultar por id
DatosBiologicosCtrl.buscar_por_id = async(req,res)=>{
    const id= req.params.id;
    try {
        const respuesta = await DatosBiologicos.find({_id:id})
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

//Consultar por parasito
DatosBiologicosCtrl.buscarParasito= async(req,res)=>{
    const genero_parasito= req.params.genero_parasito;
    try {
        const respuesta = await DatosBiologicos.find({genero_parasito:genero_parasito})
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
DatosBiologicosCtrl.buscarUsuario= async(req,res)=>{
    const key_usuario= req.params.key_usuario;
    try {
        const respuesta = await DatosBiologicos.find({key_usuario:key_usuario})
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

//Consultar por latitud
DatosBiologicosCtrl.buscarLatitud= async(req,res)=>{
    const latitud= req.params.latitud;
    try {
        const respuesta = await DatosBiologicos.find({latitud:latitud})
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

//Consultar por longitud
DatosBiologicosCtrl.buscarLongitud= async(req,res)=>{
    const longitud= req.params.longitud;
    try {
        const respuesta = await DatosBiologicos.find({longitud:longitud})
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

//Consultar por elevacion
DatosBiologicosCtrl.buscarElevacion= async(req,res)=>{
    const elevacion= req.params.elevacion;
    try {
        const respuesta = await DatosBiologicos.find({elevacion:elevacion})
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

//Consultar por localidad
DatosBiologicosCtrl.buscarLocalidad= async(req,res)=>{
    const localidad= req.params.localidad;
    try {
        const respuesta = await DatosBiologicos.find({localidad:localidad})
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
//Consultar por codigo genbank
DatosBiologicosCtrl.buscarCodigoGenbank= async(req,res)=>{
    const codigo_genbank= req.params.genbank;
    try {
        const respuesta = await DatosBiologicos.find({codigo_genbank:codigo_genbank})
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
//Consultar por marcador molecular
DatosBiologicosCtrl.buscarMarcadorMolecular= async(req,res)=>{
    const marcador_molecular= req.params.marcador_molecular;
    try {
        const respuesta = await DatosBiologicos.find({marcador_molecular:marcador_molecular})
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
//Consultar por orden del ave
DatosBiologicosCtrl.buscarOrden= async(req,res)=>{
    const orden= req.params.orden;
    try {
        const respuesta = await DatosBiologicos.find({orden:orden})
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
//Consultar por especie del ave
DatosBiologicosCtrl.buscarEspecie= async(req,res)=>{
    const especie= req.params.especie;
    try {
        const respuesta = await DatosBiologicos.find({especie:especie})
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
//Consultar por familia del ave
DatosBiologicosCtrl.buscarFamilia= async(req,res)=>{
    const familia= req.params.familia;
    try {
        const respuesta = await DatosBiologicos.find({familia:familia})
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
//Consultar por pais
DatosBiologicosCtrl.buscarPais= async(req,res)=>{
    const id_pais= req.params.id_pais;
    try {
        const respuesta = await DatosBiologicos.find({id_pais:id_pais})
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
//Consultar por referencia bibliografica
DatosBiologicosCtrl.buscarRefBiblio= async(req,res)=>{
    const bibliographic_ref= req.params.bibliographic_ref;
    try {
        const respuesta = await DatosBiologicos.find({bibliographic_ref:bibliographic_ref})
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
//Actualizar por id
DatosBiologicosCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    try {
        const respuesta = await DatosBiologicos.findByIdAndUpdate({_id: id},req.body)
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json({
            mensaje: 'Datos biológicos actualizados'
        })
    }}
    catch (error) {       
        return res.status(400).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
}

//Eliminar por id
DatosBiologicosCtrl.eliminar = async(req,res)=>{
    const id = req.params._id
    const respuesta = await DatosBiologicos.findByIdAndRemove({_id: id})
    res.json({
        mensaje: 'Datos biológicos eliminados'
    })
}

module.exports = DatosBiologicosCtrl
