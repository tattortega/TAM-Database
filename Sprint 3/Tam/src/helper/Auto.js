const Auto= {}
const jwt= require('jsonwebtoken')

Auto.verificarToken= (req,res,next)=>{
    if(!req.headers.autorizacion){
        return res.json({
            mensaje: 'no estás autorizado'
        })
    }

    const token = req.headers.autorizacion
    if(token===null){

        return res.json({
            mensaje:'No estas autorizado'
        })
    }

    jwt.verify(token, 'Secreta',(error,resultado)=>{
        if(error)
        return res.json({
            mensaje:'No estás autorizado'
        })

        next()
    })
}

module.exports = Auto