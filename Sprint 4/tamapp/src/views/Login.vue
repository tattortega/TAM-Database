<template>
  <main class="iniciar_sesion">
    <div id="parrafo_descripcion">
      <div id="descripcion">
        TAM DATABASE es una plataforma desarrollada para facilitar la
        compilación, el almacenamiento y consulta de datos biológicos asociados
        a muestras de malaria aviar.
      </div>
    </div>
    <section id="formulario_iniciar_sesion">
      <form action="" method="GET">
        <div class="msje_inicia_sesion">
          <h3>INICIAR SESION</h3>
        </div>
        <hr />
        <div class="campos">
          <input
            class="inputs"
            id="usuario"
            type="text"
            placeholder="Usuario"
            size="30"
            minlength="5"
            maxlength="20"
            required
            pattern="[.A-Za-z0-9]+"
          />
        </div>
        <div class="campos">
          <input
            class="inputs"
            id="contraseña"
            type="password"
            placeholder="Contraseña"
            size="30"
            minlength="5"
            maxlength="20"
            required
            pattern="[.A-Za-z0-9]+"
          />
        </div>

        <div id="check_div">
          <!--  <input type="checkbox" id="ch" name="sesión" value="sesion_on">
                <label id="lbl" for="ch">Mantener la sesión iniciada<br></label> 
                
                Acá con el id=ch , estoy indicando que el label de id="lbl" está asociado 
                al checkbox con id="ch"
                -->
          <label class="checkbox">
            <input type="checkbox" />Mantener sesion iniciada
            <span class="check"></span>
          </label>
        </div>
        <div id="br">
          <a href="../recuperar_usuario" id="link"
            >Recuperar usuario y/o contraseña</a
          >
        </div>
        <div class="ubicar">
          <button id="button" @click="ingresar"><b>Ingresar</b></button>
          <a id="button2" href="#modal"><label>Regístrate </label></a>
        </div>
      </form>
    </section>
    <!--Formulario de Registro-->
    <aside id="modal" class="modal">
      <div class="container">
        <header class="header">
          <a href="#" class="close-modal">X</a>
          <h1>REGISTRATE</h1>
        </header>
        <hr />
        <div>
          <p><strong>Ingrese los siguientes datos para registrarse</strong></p>
        </div>
        <section>
          <FormulateForm
              action="/"
              class="login-form"
              v-model="formValues"
            >
            <div class="formulario">
              <div class="campo">                
                <FormulateInput 
                  type="text"
                  size="30"         
                  id="nombres"
                  name="nombre"
                  placeholder="Nombre"
                  class="input"
                  validation="required"
                />
              </div>
              <div class="campo">
                <FormulateInput 
                  type="text"
                  size="30"         
                  id="apellidos"
                  name="apellido"
                  placeholder="Apellido"
                  class="input"
                  validation="required"
                />
              </div>
              <div class="campo">
                <FormulateInput
                  type="email"
                  size="30"         
                  id="correo"
                  name="correo electrónico"
                  placeholder="Correo electrónico"
                  class="input"
                  validation="required|email"
                />
              </div>
              <div class="campo">
                <FormulateInput
                  type="text"
                  size="30"         
                  id="usuario2"
                  name="usuario"
                  placeholder="Usuario"
                  class="input"
                  validation="required"
                />
              </div>
              <div class="campo">
                <FormulateInput
                  type="password"
                  size="30"         
                  id="contraseña2"
                  name="contraseña"
                  placeholder="Contraseña"
                  class="input"
                  validation="required"
                />
              </div>
              <div class="campo">
                <input
                  type="submit"
                  id="boton-cuenta"
                  @click="crear"
                  value="Crear cuenta"
                />
              </div>
              </div>
          </FormulateForm>                  
        </section>
      </div>
    </aside>
  </main>
</template>

<script>

import api from "@/logic/Api.js"; 
// import Auto from "@/logic/Autenticacion.js";

export default {
  name: "Login",
  data () {
    return {
      formValues: {}
    }
  }
  ,
  methods: {
    // async ingresar() {
    //   try {
    //     let respuesta = await api.token({
    //       usuario: this.entrada,
    //     });
    //     Auto.createToken(respuesta.data);
    //     alert(Auto.getToken());
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },

    //API
    async crear() {
        var nombres = document.getElementById("nombres").value;
        var apellidos = document.getElementById("apellidos").value;
        var correo = document.getElementById("correo").value;
        var usuario = document.getElementById("usuario2").value;
        var contraseña = document.getElementById("contraseña2").value;

        const correorepetido = await api.obtenerCorreo(correo)
        console.log(correorepetido)
        
        const usuariorepetido = await api.obtenerUsuario(usuario)
        console.log(usuariorepetido)        

        var mensaje="Diligencie los siguientes datos:\n";

          if (nombres.length<3 || nombres===""){
            alert(mensaje=mensaje+"-Los nombres deben tener minimo 3 caracteres\n");
          }

          else if (apellidos.length<3){
            alert(mensaje=mensaje+"-Los apellidos debe tener minimo 3 caracteres\n");
          }
          
          else if(correorepetido.data[0]!=undefined && correorepetido.data[0].correo == correo){
                alert(mensaje=mensaje+"-Este correo ya ha sido registrado\n");
            }

          else if (usuario.length<5){
            alert(mensaje=mensaje+"-El usuario debe tener minimo 5 caracteres\n");
          }

          else if(usuariorepetido.data[0]!=undefined && usuariorepetido.data[0].usuario == usuario){
                alert(mensaje=mensaje+"-Este usuario ya ha sido registrado\n");
          }
          
          else if (contraseña.length<5){
            alert(mensaje=mensaje+"-La contraseña debe tener minimo 5 caracteres\n");            
        } 
        
        else{
          await api.crear("Usuario", {
            nombres:nombres,
            apellidos:apellidos,
            correo:correo,
            usuario:usuario,
            contraseña:contraseña
          })
          alert("Registro exitoso")
        }
      },


      async ingresar() {
        var usuario = document.getElementById("usuario").value;
        var contraseña = document.getElementById("contraseña").value;
        if (usuario === "" || contraseña === "") {
          alert("Completa todos los campos para iniciar sesion");
        } else {
          await api.obtenerUno("Usuario", {
            usuario:usuario,
            contraseña:contraseña
          })
          alert("Bienvenido a TAM DATABASE");
        }
      }
    }
  }

</script>

<style>

body {
  background: linear-gradient(to bottom right, #69af9d83, #fffffd8c);

}

.iniciar_sesion {
  display: flex;
  flex-direction: column; /*Mostrar el diseño sin esto*/
  align-items: center;
  padding: 1em;
  padding-bottom: 5em;
}

#parrafo_descripcion {
  border-radius: 6px;
  border: rgba(35, 0, 130, 0.452) solid;
  border-color: indigo;
  padding: 1em;
  margin: 1em;
  background-color: rgba(35, 0, 130, 0.178);
}
#descripcion {
  font-size: 25px;
}

#formulario_iniciar_sesion {
  border-radius: 6px;
  border: rgba(35, 0, 130, 0.452) solid;
  border-color: indigo;
  padding: 1em;
  margin: 1em;
  text-align: center;
  background-color: rgba(35, 0, 130, 0.178);
}

#check_div {
  margin: 1em;
  margin-left: 0;
  padding: 0.2em;
  text-align: left;
}
.campos {
  padding-top: 1em;
}
.inputs {
  padding: 8px;
  font-size: 0.8em;
  font-weight: 500;
  padding-right: 2em;
  color: indigo;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#link {
  font-size: 15px;
  color: rgba(35, 0, 130, 0.452);
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#br a:hover {
  color: rgb(226, 238, 55);
}
.descripcion {
  text-align: justify;
}
/*Estilos botones*/
#button {
  background-color: indigo;
  border: 1px indigo solid;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 1em;
}

#button2 {
  background-color: rgba(35, 0, 130, 0.452);
  border: 1px rgba(35, 0, 130, 0.452) solid;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 1em;
}
/*Sombrear el botón principal*/
#button:hover {
  background-color: rgba(35, 0, 130, 0.452);
}
/*Sombrear el botón principal*/
#button2:hover {
  background-color: rgba(122, 103, 173, 0.452);
}

/*Estilo a la palabra del botón principal*/
#button b {
  font-size: 15px;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
/*Estilo a la palabra del botón secundario*/
#button2 label {
  font-size: 15px;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  cursor: pointer;
}

#br {
  margin: 1em;
}

.ubicar {
  text-align: center;
}

.msje_inicia_sesion h3 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  color: indigo;
}

/*Inicio código CSS (Estilo): para que se seleccione el cuadrito de mantener la sesion iniciada
Estilo para el checkbox también*/
.checkbox {
  display: block;
  position: relative;
  padding-left: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 11px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: indigo;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.check {
  position: absolute;
  top: 0;
  left: 0;
  height: 13px;
  width: 13px;
  background-color: #eee;
  border: 1px solid #ccc;
}

.checkbox:hover input ~ .check {
  border: 2px solid indigo;
}
.checkbox input:checked ~ .check {
  background-color: indigo;
  border: none;
}
.check::after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .check::after {
  display: block;
}
.checkbox .check::after {
  left: 3px;
  top: 0px;
  width: 3px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/*Fin código CSS (Estilo): para que se seleccione el cuadrito de mantener la sesion iniciada
Estilo para el checkbox también*/

/*
#ch:hover {
  border-color: indigo;
}
#lbl {
  font-size: 15px;
  color:indigo;
}
*/

/*Ventana Modal*/
#button2 {
  transition: all 0.15s linear;
}

.modal {
  position: fixed;
  top: -100vh;
  left: 0;
  z-index: 99999999;
  background: rgba(0, 0, 0, 0.75);
  width: 900vw;
  height: 100vh;
  opacity: 0;
}

.modal .container {
  position: fixed;
  transition: top 0.35x ease;
  margin-left: 450px;
  background: #bbc2d6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 6px;
  padding: 1.2em;
  padding-bottom: 0;
  text-align: center;
}

.close-modal {
  color: indigo;
  position: absolute;
  top: 0.1em;
  right: 0.375em;
  margin: 0;
  padding: 5px;
  font-weight: bold;
  font-size: 1em;
  text-decoration: none;
  border-radius: 6px;
}

.header a:hover {
  background-color: rgba(35, 0, 130, 0.452);
}

.modal:target {
  opacity: 1;
  top: 0;
}

.modal .btn-close-modal {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999991;
}

.modal:target .container {
  top: 20px;
  transition: top 0.35s ease;
}

/*Formulario Registro*/

h1 {
  color: indigo;
  font-size: 1.5em;
  margin: 0;
}

p {
  color: indigo;
  margin-bottom: 0.5em;
  margin-top: 0;
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
  text-align: center;
}

#boton-cuenta {
  background-color: indigo;
  border: 1px indigo solid;
  border-radius: 1em;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 4px 2px;
  cursor: pointer;
}

#boton-cuenta:hover {
  background-color: rgba(35, 0, 130, 0.452);
}

.formulate-input-errors{
  padding: 0;
  margin: 0;
}


</style>