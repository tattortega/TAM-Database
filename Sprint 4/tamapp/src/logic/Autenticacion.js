const Auto = {
    
}

Auto.createToken =(token)=>{
    localStorage.setItem('tamkey',token)
}

Auto.getToken =()=>{
    return localStorage.getItem('tamkey')   
}

Auto.isToken =()=>{
    if(localStorage.getItem('tamkey')){
        return true
    }else{
       return false
    }
    
}

module.exports = Auto;