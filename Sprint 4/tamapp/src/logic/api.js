import axios from "axios";

const API = "http://localhost:4000"; //

export default{

    ingresar(subdir,objeto){

        const ax1 = `${API}/${subdir}`; 

        return axios.post(ax1,objeto);

    }
}