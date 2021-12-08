<template>
  <header>
    <div>
      <h1 class="titulo">
        <img src="../assets/LogoTAM.svg" alt="Logo" /> Tam Database
      </h1>
      <h3 class="subtitulo">La Base de Datos de Malaria Aviar Trópical</h3>
    </div>
  </header>
</template>


<script>
export default {};
</script>


<style>
body {
  margin: 0;
  padding: 0;
}

* {
  font-size: 25px;
  font-family: Quicksand;
  color: indigo;
}

.titulo {
  background-color: rgba(35, 0, 130, 0.452);
  color: #ebebeb;
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.titulo img {
  height: 180px;
}

.subtitulo {
  margin-top: -60px;
  color: #ebebeb;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 6em;
}
</style>