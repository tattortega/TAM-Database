<template>
  <div class="main">
    <section class="section">
        <FormulateForm
            class="login-form"
            v-model="formValues">
          <div>
            <h3>ENVIA TU SOLICITUD</h3>
          </div>
          <div class="inputs">
            <FormulateInput
              id="nombre"
              name="nombre"
              type="text"
              size="30"
              label="Nombre completo"
              validation="required"
            />
          </div>
          <div>
            <FormulateInput
              id="doc"
              name="N° documento de identificación"
              type="number"
              label="N° documento de identificación"
              validation="required"
            />
          </div>
          <div>
            <FormulateInput
                id="email"
                name="correo electronico"
                type="email"
                size="30"
                label="Correo electronico"
                validation="required|email"
              />
          </div>
          <div>
            <FormulateInput
                name="descripcion de la solicitud"
                type="textarea"
                cols="35"
                rows="10"
                label="Descripcion de la solicitud"
                validation="required"
              />
          </div>
              <button @click="contactar" type="submit">
                <b>Enviar solicitud</b>
              </button>        

      </FormulateForm>
    </section>
  </div>
</template>

<script>

import api from "../logic/api";//Cada 2 puntos retrocede una carpeta.

  
export default {
  data () {
    return {
      formValues: {}
    }
  },
  methods:{
    
    async contactar() {
      const nombre = document.getElementById('nombre').value;
      const doc_identidad = document.getElementById('doc').value;
      const email = document.getElementById('email').value;
      const descripción = document.getElementById('desc').value;
      
      if(nombre === '' || doc_identidad === '' || email === '' || descripción === ''){
        alert("Los campos no pueden estar vacíos. Por favor digitelos completamente para enviar su solicitud.")
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

h3{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: indigo;
}

</style>
