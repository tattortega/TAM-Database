const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Datos_biologicosSchema = new Schema({
    key_usuario:String,
    latitud:String,
    longitud:String,
    localidad:String,
    elevacion:String,
    codigo_genbank:String,
    marcador_molecular:String,
    orden:String,
    especie:String,
    familia:String,
    genero_parasito:String,
    bibliographic_ref:String,
    id_pais:String,
})

//exportar el modelo
module.exports = mongoose.model('datos_biologicos', Datos_biologicosSchema)