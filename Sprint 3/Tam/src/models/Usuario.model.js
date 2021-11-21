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
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})

// Sets the created_at parameter equal to the current time
/*UsuarioSchema.pre('save', async function(){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    await doStuff();
});
*/

//convertir a modelo

module.exports = mongoose.model('usuario',UsuarioSchema)