import axios from "axios";

const API = "http://localhost:4000";

export default{

    obtenerTodo(subdir){
        const ax1 = `${API}/${subdir}`;
        return axios.get(ax1);
    },

    obtenerParasitoGenero(subdir){
        const ax1 = `${API}/DatosBiologicos/genero_parasito/${subdir}`;
        return axios.get(ax1);
    },

}