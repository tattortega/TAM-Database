const mongoose = require('mongoose');
const  {Schema} = require('mongoose');

let soporteSchema = new Schema({
    usuario: {type:String, required:true},
    identificacion: {type:String, required:true},
    correo: {type:String, required:true},
    descripcion: {type:String, required:true},
});

const Soporte = mongoose.model('soporte',soporteSchema);

module.exports = Soporte;