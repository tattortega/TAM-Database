import axios from "axios";

const API = "http://localhost:4000"; //

export default{

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
}