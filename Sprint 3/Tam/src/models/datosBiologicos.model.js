const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Datos_biologicosSchema = new Schema({
    latitud: {type:Number, required:[true, 'Campo obligatorio']},
    longitud: {type:Number, required:[true, 'Campo obligatorio']},
    localidad: {type:String},
    elevacion: {type:Number,},
    pais: {type:String, required:[true, 'Campo obligatorio']},
    codigo_genbank: {type:String, required:[true, 'Campo obligatorio']},
    marcador_molecular: {type:String, required:[true, 'Campo obligatorio']},
    orden: {type:String, required:[true, 'Campo obligatorio']},
    especie: {type:String, required:[true, 'Campo obligatorio']},
    familia: {type:String},
    genero_parasito: {type:String, required:[true, 'Campo obligatorio']},
    bibliographic_ref: {type:String, required:[true, 'Campo obligatorio']},
    creado_el: {type: Date, default: Date.now}
})

//exportar el modelo
module.exports = mongoose.model('datos_biologicos', Datos_biologicosSchema)