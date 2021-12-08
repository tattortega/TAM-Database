<template>
    <nav class="MenuWrap">  
        <div class="menu-item">
            <router-link class="ListItem" to="/Contactanos">Contáctanos</router-link>
        </div>
        <div class="menu-item">
            <router-link class="ListItem" to="/">Inicio</router-link>
        </div>      
    </nav>
</template>

<script>
export default {
  name:"NavBarLogout"
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