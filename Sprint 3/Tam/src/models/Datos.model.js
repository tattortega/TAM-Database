const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DatosSchema = new Schema({
    key_usuario:String,
    latitud:{type:String, required:[true, 'Campo obligatorio']},
    longitud:{type:String, required:[true, 'Campo obligatorio']},
    localidad:String,
    elevacion:String,
    id_pais:String,
    codigo_genbank:{type:String, required:[true, 'Campo obligatorio']},
    marcador_molecular:{type:String, required:[true, 'Campo obligatorio']},
    orden_ave:String,
    especie_ave:{type:String, required:[true, 'Campo obligatorio']},
    familia_ave:String,
    genero_parasito:{type:String, required:[true, 'Campo obligatorio']},
    bibliografia:String
})


//convertir a modelo

module.exports = mongoose.model('datos', DatosSchema)