const mongoose = require('mongoose')
URI=('mongodb+srv://tam_database:tam@cluster0.tk2xn.mongodb.net/TAM_DATABASE?retryWrites=true&w=majority')

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=> console.log('Estoy conectado a la bd:',db.connection.name))
.catch(error=> console.log(error))

module.exports = mongoose
