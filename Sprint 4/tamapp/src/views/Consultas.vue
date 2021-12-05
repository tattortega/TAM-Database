<template>
  <main>
    <div class="desc-search">
      <p>Realice una busqueda por filtros:</p>
    </div>
    <section>
      <form class="search" action="" method="POST">
        <hr />
        
        <div class="categoria4">
          <div>
            <label class="categ" for="search"
              >Información Taxonómica del Parásito:</label
            >
          </div>
          <div>
            <label>Género<br>
              <input type="radio" name="genero" value="Todo" @click="Todo" id="Todo"> Todo<br>
              <input type="radio" name="genero" value="Hemoproteus" v-on:input="entrada = $event.target.value" id="Hemoproteus"> Hemoproteus<br>
              <input type="radio" name="genero" value="Leucocytozoon" @click="Leucocytozoon" id="Leucocytozoon"> Leucocytozoon<br>
            </label>
          </div>
        </div>
        <hr />
      </form>
      <div class="boton-search">
        <input
          id="boton-search"
          type="submit"
          value="Buscar"
        />
      </div>
    </section>
    <section>
      <div>
        <table class="informe" border="1">
          <thead>
            <tr>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>País</th>
              <th>Localidad</th>
              <th>Elevación (m)</th>
              <th>Codigo Genbank</th>
              <th>Marcador Molecular</th>
              <th>Orden Ave</th>
              <th>Familia Ave</th>
              <th>Especie Ave</th>
              <th>Género parásito</th>
              <th>Referencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-0,599</td>
              <td>-77,89</td>
              <td>Ecuador</td>
              <td>Cerro Bosco</td>
              <td>2177</td>
              <td>KJ661265</td>
              <td>cytb</td>
              <td>Passeriformes</td>
              <td>Thraupidae</td>
              <td>Diglossa cyanea</td>
              <td>Haemoproteus sp.</td>
              <td>(Harrigan et al., 2014)</td>
            </tr>
            <tr>
              <td>-0,599</td>
              <td>-77,89</td>
              <td>Ecuador</td>
              <td>Cerro Bosco</td>
              <td>2177</td>
              <td>KJ661265</td>
              <td>cytb</td>
              <td>Passeriformes</td>
              <td>Thraupidae</td>
              <td>Diglossa cyanea</td>
              <td>Haemoproteus sp.</td>
              <td>(Harrigan et al., 2014)</td>
            </tr>
            <tr>
              <td>-0,599</td>
              <td>-77,89</td>
              <td>Ecuador</td>
              <td>Cerro Bosco</td>
              <td>2177</td>
              <td>KJ661265</td>
              <td>cytb</td>
              <td>Passeriformes</td>
              <td>Thraupidae</td>
              <td>Diglossa cyanea</td>
              <td>Haemoproteus sp.</td>
              <td>(Harrigan et al., 2014)</td>
            </tr>
            <tr>
              <td>-0,599</td>
              <td>-77,89</td>
              <td>Ecuador</td>
              <td>Cerro Bosco</td>
              <td>2177</td>
              <td>KJ661265</td>
              <td>cytb</td>
              <td>Passeriformes</td>
              <td>Thraupidae</td>
              <td>Diglossa cyanea</td>
              <td>Haemoproteus sp.</td>
              <td>(Harrigan et al., 2014)</td>
            </tr>
            <tr>
              <td>-0,599</td>
              <td>-77,89</td>
              <td>Ecuador</td>
              <td>Cerro Bosco</td>
              <td>2177</td>
              <td>KJ661265</td>
              <td>cytb</td>
              <td>Passeriformes</td>
              <td>Thraupidae</td>
              <td>Diglossa cyanea</td>
              <td>Haemoproteus sp.</td>
              <td>(Harrigan et al., 2014)</td>
            </tr>
            <tr>
              <td>-0,599</td>
              <td>-77,89</td>
              <td>Ecuador</td>
              <td>Cerro Bosco</td>
              <td>2177</td>
              <td>KJ661265</td>
              <td>cytb</td>
              <td>Passeriformes</td>
              <td>Thraupidae</td>
              <td>Diglossa cyanea</td>
              <td>Haemoproteus sp.</td>
              <td>(Harrigan et al., 2014)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="boton-download">
        <button id="boton-download">Descargar informes</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  // data: function(){
  //   return{
  //   entrada:document.getElementById('Hemoproteus').value
  //   }
  // },
  // methods:{
  //   alert(`${this.entrada} no existe`)

  //   async obtenerParasitoGenero(){
  //     //var parasito=document.getElementById
  //   }
  // }
}
</script>

<style>
.desc-search {
  padding: 1em;
  padding-left: 2em}
.boton-search {
  padding: 1em;
  padding-left: 2em;
  padding-bottom: 3em}
#boton-search {
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
  cursor: pointer}
#boton-search:hover {
  background-color: rgba(35, 0, 130, 0.452)}
.search {
  display: flex;
  flex-direction: row;
  padding: 1em;
  padding-left: 2em}
.categoria1 {
  padding: 0;
  padding-left: 1em;
  width: 240px}
.categoria2 {
  padding-left: 1em;
  padding-right: 1em;
  width: 227px}
.categoria3 {
  padding-left: 1em;
  padding-right: 1em;
  width: 269px}
.categoria4 {
  padding-left: 1em;
  padding-right: 1em;
  width: 269px}
.categ {
  font-weight: bold}
hr {
  padding: 0;
  margin: initial;
  border: indigo 1px solid}
#boton {
  padding: 8px;
  font-size: 1em;
  cursor: pointer}
table {
  background-color: rgba(35, 0, 130, 0.178);
  border: solid;
  border-collapse: collapse;
  border-color: indigo;
  margin: 2em;
  margin-top: 0;
  padding: 1em;
  text-align: center}
th,td {
  font-size: 20px;
  width: 200px}
.boton-download {
  padding: 1em;
  padding-left: 2em;
  padding-top: 0;
  margin-bottom: 5em}
#boton-download {
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
  cursor: pointer}
#boton-download:hover {
  background-color: rgba(35, 0, 130, 0.452);}
</style>
