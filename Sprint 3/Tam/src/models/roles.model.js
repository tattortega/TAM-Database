const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RolesSchema = new Schema({
    roles_id:{type:String, required:[true, 'Campo obligatorio']},
    nombre_rol:{type:String, required:[true, 'Campo obligatorio']},
    descripción:{type:String, required:[false, 'Campo opcional']},
    creado_el: {type: Date, default: Date.now}
})


//convertir a modelo

module.exports = mongoose.model('roles',RolesSchema);
