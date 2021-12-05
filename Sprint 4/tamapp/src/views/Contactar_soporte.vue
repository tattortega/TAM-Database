<template>
  <div class="main">
    <section class="section">
      <div>
        <form action="contactar_soporte.html" method="POST">
          <strong>
            <h3>ENVÍA TU SOLICITUD</h3>
          </strong>
          <div class="lbl">
            <label for="nombre"
              >Nombre completo:
              <input type="text" name="nombre" id="nombre" size="50" required />
            </label>
            <label for="doc"
              >N° documento de identificación:
              <input
                type="text"
                name="doc"
                id="doc"
                size="50"
                required
                min="1"
              />
            </label>
            <label for="email" 
              >Correo Electrónico:
              
              <input type="email" name="email" id="email" size="50" required/>

            </label>
            <label for="desc"
              >Descripción de la solicitud:
              <textarea
                name="desc"
                cols="52"
                rows="10"
                id="desc"
                required
              ></textarea>
            </label>
          </div>
          <br />
          <button @click="contactar" type="submit">
            <b>Enviar solicitud</b>
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>

import api from "../logic/api";//Cada 2 puntos retrocede una carpeta.

  
export default {
  methods:{
    
    async contactar() {
      const nombre = document.getElementById('nombre').value;
      const doc_identidad = document.getElementById('doc').value;
      const email = document.getElementById('email').value;
      const descripción = document.getElementById('desc').value;
        
      if(nombre === '' || doc_identidad === '' || email === '' || descripción === ''){
        alert("Los campos no pueden estar vacíos. Por favor digitarlos completamente para su solicitud.")
      }
      else{
          await api.ingresar("Soportes",{ /*1. Se colocan los atributos como están en el modelo del backend API
            Sprint 3, y se asigna el campo donde capturamos los datos en el DOM van en formato JSON
            2. Los tipos de datos del DOM(Formulario) deben ser los mismos con los del backend API
            del modelo Sprint 3 */
            usuario: nombre,
            identificacion: doc_identidad,
            correo: email,
            descripcion: descripción
          })
          alert("Su solicitud se envió correctamente.")
      }
    
    }
  }
};
</script>

<style scoped>

  a:hover{
      color: rgb(226, 238, 55);
  }
  
  input{  
    text-align: left;
    background-color: #fbfbfb; 
    width: 90%; 
    height: 40px; 
    border-style: solid; 
    border-width: 1px; 
    border-color: indigo; 
    margin-top: 10px;  
    padding-left: 10px;
    margin-bottom: 20px; 
  }

  .lbl label{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: indigo;
  }

  .lbl input,textarea{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: indigo;
    font-size: 20px;
  }
  
  textarea{
    background-color: #fbfbfb; 
    width: 90%; 
    height: 150px; 
    border-style: solid; 
    border-width: 1px; 
    border-color: indigo; 
    margin-top: 10px;  
    padding-left: 10px;
    margin-bottom: 20px; 
    padding-top: 15px; 
  }
  
  label{
    display: block; 
    float: center; 
    padding: 1px; 
    margin: 1px; 
    font-size: 20px;
    text-align: left;
    padding-left: 15px;
  }
  
  button{
    height: 45px; 
    padding-top: -150px; 
    padding: auto;
    background-color: indigo; 
    border: 1px indigo solid;
    border-radius: 15px;  
    width: 190px;    
    cursor: pointer;    
  }


  button:hover{
    background-color: rgba(35, 0, 130, 0.178);
  }
  button b{
  font-size: 15px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  }

  .section{
    background-color: rgba(35, 0, 130, 0.178);
    border: solid;
    border-radius: 6px;
    border-color: indigo;
    text-align: center;
    width: 90%;
    max-width: 35%;
    margin: 3em auto;
    margin-bottom: 6.5em;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    padding: 1em;
  }

strong h3{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: indigo;
}
</style>
