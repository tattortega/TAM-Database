const DatosBiologicosCtrl={}
const {} = require('mongoose')
const DatosBiologicos = require('../models/datosBiologicos.model.js')

DatosBiologicosCtrl.crear = async(req,res)=>{
    try {
        const {latitud,longitud,localidad,elevacion,codigo_genbank,marcador_molecular,orden,especie,familia,genero_parasito,bibliographic_ref,pais} = req.body

        const NuevosDatosBiologicos = new DatosBiologicos({
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
            pais
        })     
        await NuevosDatosBiologicos.save()
        res.json({
            mensaje:'Datos biologicos registrados'            
        })
    } catch (error) {
        res.send('No se pudo registrar los datos biologicos')
    }

}
//Consultar todos los datos biologicos
DatosBiologicosCtrl.buscar_todos = async(req,res)=>{
    try {
        const respuesta = await DatosBiologicos.find()
        res.json(respuesta)
    } catch (error) {
        res.send('No se encuentran datos biologicos')
    }

}

//Consultar por id
DatosBiologicosCtrl.buscar_por_id = async(req,res)=>{
    try {
        const id= req.params.id;
        const respuesta = await DatosBiologicos.findById({_id:id})
        console.log(respuesta)
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
             
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}

//Consultar por parasito
DatosBiologicosCtrl.buscarParasito= async(req,res)=>{
    try {
        const genero_parasito= req.params.genero_parasito;
        const respuesta = await DatosBiologicos.find({genero_parasito:genero_parasito})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
             
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}

//Consultar por usuario
DatosBiologicosCtrl.buscarUsuario= async(req,res)=>{
    try {
        const key_usuario= req.params.key_usuario;
        const respuesta = await DatosBiologicos.find({key_usuario:key_usuario})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}

//Consultar por latitud
DatosBiologicosCtrl.buscarLatitud= async(req,res)=>{
    try {
        const latitud= req.params.latitud;
        const respuesta = await DatosBiologicos.find({latitud:latitud})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}

//Consultar por longitud
DatosBiologicosCtrl.buscarLongitud= async(req,res)=>{
    try {
        const longitud= req.params.longitud;
        const respuesta = await DatosBiologicos.find({longitud:longitud})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}

//Consultar por elevacion
DatosBiologicosCtrl.buscarElevacion= async(req,res)=>{
    try {
        const elevacion= req.params.elevacion;
        const respuesta = await DatosBiologicos.find({elevacion:elevacion})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}

//Consultar por localidad
DatosBiologicosCtrl.buscarLocalidad= async(req,res)=>{
    try {
        const localidad= req.params.localidad;
        const respuesta = await DatosBiologicos.find({localidad:localidad})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}
//Consultar por codigo genbank
DatosBiologicosCtrl.buscarCodigoGenbank= async(req,res)=>{
    try {
        const codigo_genbank= req.params.genbank;
        const respuesta = await DatosBiologicos.find({codigo_genbank:codigo_genbank})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}
//Consultar por marcador molecular
DatosBiologicosCtrl.buscarMarcadorMolecular= async(req,res)=>{
    try {
        const marcador_molecular= req.params.marcador_molecular;
        const respuesta = await DatosBiologicos.find({marcador_molecular:marcador_molecular})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}
//Consultar por orden del ave
DatosBiologicosCtrl.buscarOrden= async(req,res)=>{
    try {
        const orden= req.params.orden;
        const respuesta = await DatosBiologicos.find({orden:orden})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}
//Consultar por especie del ave
DatosBiologicosCtrl.buscarEspecie= async(req,res)=>{
    try {
        const especie= req.params.especie;
        const respuesta = await DatosBiologicos.find({especie:especie})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}
//Consultar por familia del ave
DatosBiologicosCtrl.buscarFamilia= async(req,res)=>{
    try {
        const familia= req.params.familia;
        const respuesta = await DatosBiologicos.find({familia:familia})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}
//Consultar por pais
DatosBiologicosCtrl.buscarPais= async(req,res)=>{
    try {
        const pais= req.params.pais;
        const respuesta = await DatosBiologicos.find({pais:pais})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}
//Consultar por referencia bibliografica
DatosBiologicosCtrl.buscarRefBiblio= async(req,res)=>{
    try {
        const bibliographic_ref= req.params.bibliographic_ref;
        const respuesta = await DatosBiologicos.find({bibliographic_ref:bibliographic_ref})
        if(respuesta==''){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{res.json(respuesta)  }
    } catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}
//Actualizar por id
DatosBiologicosCtrl.actualizar = async(req,res)=>{
    try {
        const id = req.params.id
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
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}

//Eliminar por id
DatosBiologicosCtrl.eliminar = async(req,res)=>{
    try {
        const id = req.params.id
        const respuesta = await DatosBiologicos.findByIdAndDelete({_id: id})
        if(respuesta==null){
            res.json({
                mensaje: 'La busqueda no se encuentra en la base de datos'
            })
        }else{ 
        res.json({
            mensaje: 'Datos biológicos eliminados'
        })}
    } 
    catch (error) {       
        return res.status(400).json({
            mensaje:'La busqueda no se encuentra en la base de datos'
        })
    }
}

module.exports = DatosBiologicosCtrl;
