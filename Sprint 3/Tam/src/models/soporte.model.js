const mongoose = require('mongoose');
const  {Schema} = require('mongoose');

let soporteSchema = new Schema({
    usuario: {type:String, required:[true, 'Campo obligatorio']},
    identificacion: {type:String, required:[true, 'Campo obligatorio']},
    correo: {type:String, required:[true, 'Campo obligatorio']},
    descripcion: {type:String, required:[true, 'Campo obligatorio']},
    creado_el: {type: Date, default: Date.now}
});

const Soporte = mongoose.model('soporte',soporteSchema);

module.exports = Soporte;