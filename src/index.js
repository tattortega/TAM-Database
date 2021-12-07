//requerimos las dependencias necesarias
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')

//voy a configurar el puerto

app.set('Port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen:'*'}))

app.use(require('./routes/usuario.route'))
app.use(require('./routes/soporte.route'))
app.use(require('./routes/pais.route'))
app.use(require('./routes/datosBiologicos.route'))
app.use(require('./routes/roles.route'))
    


app.listen(app.get('Port'),()=>{
    console.log('Servidor corriendo y escuchando por el puerto', app.get('Port'))

})