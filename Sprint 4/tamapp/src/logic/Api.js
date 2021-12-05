import axios from "axios";



const API = "http://localhost:4000";



export default {

    crear(subdir,objeto){
        const ax1 = `${API}/${subdir}`;
        return axios.post(ax1,objeto);
    },

    obtenerUno(subdir){
        const ax1 = `${API}/${subdir}`;
        return axios.get(ax1);
    },

    obtenerUsuario(subdir){
        const ax1 = `${API}/Usuarios${subdir}`;
        return axios.get(ax1);
    },

    obtenerCorreo(subdir, objeto){
        const ax1 = `${API}/Usuarios${subdir}`;
        return axios.get(ax1, objeto);
    },


    // token(param){
    //     //http:dominiolocal/usuario/token
    //     const ax1 = `${API}/Usuario, Auto.verificarToken`;
    //     return axios.post(ax1,param);
    // },

};
