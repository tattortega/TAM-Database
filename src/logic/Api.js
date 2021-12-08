import axios from "axios";



const API = "http://localhost:4000";



export default {

    //Metodo registrarse
    crear(subdir,objeto){
        const ax1 = `${API}/${subdir}`;
        return axios.post(ax1,objeto);
    },

    //Metodo validar login
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

    //Metodo ingresar registros soporte
    ingresar(subdir,objeto){
        const ax1 = `${API}/${subdir}`; 
        return axios.post(ax1,objeto);
    },

    //Metodo consultar datos biologicos
    obtenerTodo(subdir){
        const ax1 = `${API}/${subdir}`;
        return axios.get(ax1);
    },

    obtenerParasitoGenero(subdir){
        const ax1 = `${API}/DatosBiologicos/genero_parasito/${subdir}`;
        return axios.get(ax1);
    },

    //Metodo ingresar datos biologicos
    ingresarDatosBiologicos(subdir,objeto){
        const ax1 = `${API}/${subdir}`;
        return axios.post(ax1,objeto);
    }

};
