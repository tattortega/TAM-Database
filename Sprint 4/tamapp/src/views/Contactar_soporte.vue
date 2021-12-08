<template>
  <div class="main">
    <NavBarLogout/>
    <section class="section">
      <div>
            <h3>ENVIA TU SOLICITUD</h3>
      </div>
      <hr>
      <FormulateForm
              class="login-form"
              v-model="formValues"
              name="soporte"
            >
            <div class="formulario">
              <div class="campo">                
                <FormulateInput 
                  type="text"
                  size="30"         
                  id="nombre"
                  name="nombre"
                  label="Nombre completo"
                  class="input formulate-input"
                  validation="required"
                />
              </div>
              <div class="campo">
                <FormulateInput 
                  type="text" 
                  size="30"         
                  id="doc"
                  name="N° documento de identificación"
                  label="N° documento de identificación"
                  class="input"
                  validation="required"
                />
              </div>
              <div class="campo">
                <FormulateInput
                  type="email"
                  size="30"         
                  id="email"
                  name="correo electrónico"
                  label="Correo electrónico"
                  class="input"
                  validation="required|email"
                />
              </div>
              <div class="campo">
                <FormulateInput
                  type="textarea"
                  cols="33"
                  rows="10"
                  size="30"         
                  id="desc"
                  name="descripcion"
                  label="Descripcion"
                  class="input"
                  validation="required"
                />
              </div>
              <div class="boton">
                <FormulateInput
                type="submit"
                label="Enviar solicitud"
                data-ghost
                @click="contactar"
              />
              </div>
              </div>
      </FormulateForm>                  
    </section>
  </div>
</template>

<script>
import NavBarLogout from '../components/NavBarLogout.vue';
import api from "../logic/api";//Cada 2 puntos retrocede una carpeta.
 
export default {
  components: { NavBarLogout },
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
      const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
      
      if(nombre === '' || doc_identidad === '' || email === ''|| descripción === ''){
        alert("Los campos no pueden estar vacíos. Por favor digitelos completamente para enviar su solicitud.")

      }
      
      else if (!emailRegex.test(email)) {
        alert("Por favor introduzca un correo electrónico válido.")
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
          this.$formulate.reset('soporte')         
      }
    }
  }
};
</script>

<style>

.formulate-input-label {
    font-size: 25px;
 } 
.formulate-input-errors{
  padding: 0;
  margin: 0;
}

.formulario {
  text-align: left;
  padding: 10px;
}

.input {
  padding: 0.2em;
  font-size: 1em;
  size: 30;
  color: indigo;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.formulate-input-error {
  font-size: 0.8em;
}

.campo {
  padding-top: 0.1em;
}

.boton{
    padding-left: 5.3em;
    padding-top: 1em;
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

.formulate-input-element--submit--label{
  color: white;
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
