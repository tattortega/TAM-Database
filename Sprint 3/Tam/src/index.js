//requerimos las dependencias necesarias
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
// require('dotenv').config()
require('./database')

//voy a configurar el puerto
app.use(cors({origen:'*'}))
// app.use((req, res, next) => {
//     // Dominio que tengan acceso (ej. 'http://example.com')
//        res.setHeader('Access-Control-Allow-Origin', '*');    
//     // Metodos de solicitud que deseas permitir
//        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');    
//     // Encabecedados que permites (ej. 'X-Requested-With,content-type')
//        res.setHeader('Access-Control-Allow-Headers', '*');    
//     next();
// })

app.set('Port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(require('./routes/usuario.route'))
app.use(require('./routes/soporte.route'))
app.use(require('./routes/pais.route'))
app.use(require('./routes/datosBiologicos.route'))
app.use(require('./routes/roles.route'))
    


app.listen(app.get('Port'),()=>{
    console.log('Servidor corriendo y escuchando por el puerto', app.get('Port'))

})