import axios from "axios";

const API = "http://localhost:4000";

export default{

    obtenerTodo(subdir){
        const ax1 = `${API}/${subdir}`;
        return axios.get(ax1);
    },

    obtenerUno(subdir){
        const ax1 = `${API}/${subdir}`;
        return axios.get(ax1);
    },

    ingresar(subdir,objeto){
        const ax1 = `${API}/${subdir}`;
        return axios.post(ax1,objeto);
    },

    actualizar(subdir,objeto){
        const ax1 = `${API}/${subdir}`;
        return axios.put(ax1,objeto);
    },

    eliminar(subdir){
        const ax1 = `${API}/${subdir}`;
        return axios.delete(ax1);
    },
}