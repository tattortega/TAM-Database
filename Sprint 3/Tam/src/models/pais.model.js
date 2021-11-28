const mongoose = require('mongoose');
const  {Schema} = require('mongoose');

let paisSchema = new Schema({
    id_pais: {type:String, required:[true, 'Campo obligatorio']},
    nombre: {type:String, required:[true, 'Campo obligatorio']},
    creado_el: {type: Date, default: Date.now}
});

const Pais = mongoose.model('pais',paisSchema);

module.exports = Pais;