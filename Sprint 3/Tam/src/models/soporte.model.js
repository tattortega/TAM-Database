const mongoose = require('mongoose');
const  {Schema} = require('mongoose');

let soporteSchema = new Schema({
    usuario: {type:String, required:true},
    identificacion: {type:String, required:true},
    correo: {type:String, required:true},
    descripcion: {type:String, required:true},
    created_at: {type: Date, default: Date.now}
});

const Soporte = mongoose.model('soporte',soporteSchema);

module.exports = Soporte;