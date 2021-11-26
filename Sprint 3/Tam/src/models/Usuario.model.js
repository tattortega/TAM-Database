const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
    nombres:{type:String, required:[true, 'Campo obligatorio']},
    apellidos:{type:String, required:[true, 'Campo obligatorio']},
    correo:{type:String, required:[true, 'Campo obligatorio']},
    estado:String,
    roles_id:String,
    usuario:{type:String, required:[true, 'Campo obligatorio']},
    contraseña:{type:String, required:[true, 'Campo obligatorio']},
    creado_el: {type: Date, default: Date.now}
})


//convertir a modelo

module.exports = mongoose.model('usuario',UsuarioSchema)