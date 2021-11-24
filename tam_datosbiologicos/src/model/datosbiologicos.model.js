
const mongoose = require('mongoose');
const  {Schema} = require('mongoose');

let datos_biologicosSchema = new Schema({
    key_usuario: {type:Number, required:true},
    latitud: {type:Number, required:true},
    longitud: {type:Number, required:true},
    localidad: {type:String, required:true},
    elevacion: {type:String, required:true},
    id_pais: {type:String, required:true},
    codigo_genbank: {type:String, required:true},
    marcador_molecular: {type:String, required:true},
    orden: {type:String, required:true},
    especie: {type:String, required:true},
    familia: {type:String, required:true},
    genero_parasito: {type:String, required:true},
    bibliographic_ref: {type:String, required:true},
});

const Datosbiologicos = mongoose.model('datos_biologicos',datos_biologicosSchema);

module.exports = Datosbiologicos;