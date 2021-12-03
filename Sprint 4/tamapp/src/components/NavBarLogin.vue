<template>
    <nav class="MenuWrap">
        <div class="menu-item" v-if="logueado">
            <router-link class="ListItem" to="/Home">Cerrar sesión</router-link>
            <!-- <a href="../Index/index.html" class="ListItem">Cerrar sesión</a> -->
        </div>
        <div class="menu-item">
            <a href="../FormularioContactarSoporte/contactar_soporte.html" class="ListItem">Contáctanos</a>
        </div>
        <div class="menu-item">
            <a href="../FormularioInformes/informes.html" class="ListItem">Consultas</a>
        </div>
        <div class="menu-item" v-if="logueado">
            <router-link class="ListItem" to="/IngresarDatosBiologicos">Ingresa tus datos</router-link>
            <!-- <a href="../FormularioIngresoDatos/IngresoDatos.html" class="ListItem">Ingresa tus datos</a> -->
        </div>        
    </nav>
</template>

<script>
export default {
  name:"NavBarLogin",
 data: function(){
   return{
     logueado:true
   }
 }
}
</script>

<style>
  
  .MenuWrap {
    background-color: indigo;
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .menu-item{
    border-left: #ebebeb solid;
    padding: 0.5em;
  }

  .ListItem,
  .LastItem {
    color: #ebebeb;
    text-decoration: none;
  }
  .ListItem {
    margin-right: 1rem;
  }
  .LastItem {
    margin-right: auto;
  }

/*Sombrear de amarillo las opciones de nav (barra de menús)*/
  a:hover{
    color: rgb(226, 238, 55);
  }
</style>