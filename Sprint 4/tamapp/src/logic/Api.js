import axios from "axios";



const API = "http://localhost:4000";



export default {

    crear(subdir,objeto){
        const ax1 = `${API}/${subdir}`;
        return axios.post(ax1,objeto);
    },

    obtenerUsuario(subdir){
        const ax1 = `${API}/Usuarios/Usuario/${subdir}`;
        return axios.get(ax1);
    },

    obtenerLogin(dato){
        const ax1 = `${API}/login/`;
        return axios.post(ax1,dato);
    },

    obtenerCorreo(subdir){
        const ax1 = `${API}/Usuarios/Correo/${subdir}`;
        return axios.get(ax1);
    },


    // token(param){
    //     //http:dominiolocal/usuario/token
    //     const ax1 = `${API}/Usuario, Auto.verificarToken`;
    //     return axios.post(ax1,param);
    // },

};
