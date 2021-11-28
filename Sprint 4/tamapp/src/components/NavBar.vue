<template>
  <nav class="MenuWrap">
    <div class="menu-item">
      <a href="../FormularioContactarSoporte/contactar_soporte.html" class="ListItem">Contáctanos</a>
    </div>
    <div class="menu-item">
      <a href="../FormularioInformes/informes.html" class="ListItem">Consultas</a>
    </div>
  </nav>
</template>

<style>
.MenuWrap {
  background-color: indigo;
  font-family: "Oswald", sans-serif;
  font-size: 1rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.menu-item {
  border-left: #ebebeb solid;
  padding: 0.5em;
  cursor: pointer;
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
.menu-item a:hover {
  color: rgb(226, 238, 55);
}
</style>