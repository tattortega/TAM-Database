<template>
  <div class="registro">
    <section id="formulario_registro">
      <form
        @submit="checkForm"
        action="../registro"
        method="post"
        novalidate="true"
      >
        <div class="msje_registro">
          <h3>REGÍSTRATE</h3>
        </div>
        <hr />
        <div class="campos">
          <input
            class="inputs"
            id="nombres"
            type="text"
            v-model="nombre"
            placeholder="Nombres"
            size="30"
            minlength="2"
            maxlength="20"
            required
          />
        </div>
        <div class="campos">
          <input
            class="inputs"
            id="apellidos"
            type="text"
            v-model="apellidos"
            placeholder="Apellidos"
            size="30"
            minlength="2"
            maxlength="20"
            required
          />
        </div>
        <div class="campos">
          <input
            class="inputs"
            id="nombreusu"
            type="text"
            v-model="nombreusu"
            placeholder="Nombre de Usuario"
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
            id="email"
            type="email"
            v-model="email"
            placeholder="Correo"
            size="30"
            minlength="5"
            maxlength="20"
            required
          />
        </div>
        <div class="campos">
          <input
            class="inputs"
            id="password"
            type="password"
            v-model="password"
            placeholder="Contraseña"
            size="30"
            minlength="5"
            maxlength="20"
            required
          />
        </div>
        <div class="campos">
          <input
            class="inputs"
            id="rol"
            type="text"
            v-model="rol"
            placeholder="Rol"
            size="30"
            minlength="5"
            maxlength="20"
            required
          />
        </div>
        <div class="ubicar">
          <button id="button" onclick="RegistroUser()" type="submit">
            <b>Crear Cuenta</b>
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Registro",
  components: {},
};
</script>

<style scope>
body {
  background: linear-gradient(to bottom right, #69af9d83, #fffffd8c);
}

.registro {
  display: flex;
  flex-direction: column; /*Mostrar el diseño sin esto*/
  align-items: center;
  padding: 1em;
  padding-bottom: 5em;
}

#formulario_registro {
  border-radius: 6px;
  border: rgba(35, 0, 130, 0.452) solid;
  border-color: indigo;
  padding: 1em;
  margin: 1em;
  text-align: center;
  background-color: rgba(35, 0, 130, 0.178);
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

/*Sombrear el botón principal*/
#button:hover {
  background-color: rgba(35, 0, 130, 0.452);
}

/*Estilo a la palabra del botón principal*/
#button b {
  font-size: 15px;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#br {
  margin: 1em;
}

.ubicar {
  text-align: center;
}

.msje_registro h3 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  color: indigo;
}
</style>

