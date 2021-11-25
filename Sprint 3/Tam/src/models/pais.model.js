const mongoose = require('mongoose');
const  {Schema} = require('mongoose');

let paisSchema = new Schema({
    id_pais: {type:String, required:true},
    nombre: {type:String, required:true},
    created_at: {type: Date, default: Date.now}
});

const Pais = mongoose.model('pais',paisSchema);

module.exports = Pais;