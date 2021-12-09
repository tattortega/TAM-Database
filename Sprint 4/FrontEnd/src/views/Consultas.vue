<template>
  <main>
    <NavBarLogin/>
    <Alert texto="Inicie sesion" v-if="!render"/>
    <div v-if="render">
    <div>
    <div class="desc-search">
      <p>
        Realice una búsqueda:
      </p>
    </div>
    <section>
      <form class="search" action="" method="POST">
        <hr/>
        <div class="categoria">
          <div class="cat">
            <label class="categ" for="search">
              Información Taxonómica del Parásito:
            </label>
          </div>
          <div>
            Género del parásito:<br>
            <select v-model="genero" name="genero" id="genero" required>
              <option value="Todo">Todo</option>
              <option value="Haemoproteus">Haemoproteus</option>
              <option value="Leucocytozoon">Leucocytozoon</option>
              <option value="Plasmodium">Plasmodium</option>
            </select>
            <!-- <FormulateInput
              @change="onChange($event)"
              v-model="value"
              :options="{Todo: 'Todo', Hemoproteus: 'Hemoproteus', Leucocytozoon: 'Leucocytozoon'}"
              type="select"
              placeholder="Seleccione una opción"
              label="Género"
            /> -->
          </div>
        </div>
        <hr/>
      </form>
      <div class="boton-search">
        <input
          id="boton-search"
          type="submit"
          value="Buscar"
          @click="buscar"
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
          <tbody v-if="!info.length">
            <tr>
              <td style="font-size:1.2em" colspan="12">{{info.mensaje}}</td>
            </tr>
          </tbody>
          <tbody v-for="(valor) in info" :key="valor._id" v-else>
            <Tabla 
            :genero_parasito="valor.genero_parasito" 
            :especie="valor.especie" 
            :latitud="valor.latitud"
            :longitud="valor.longitud"
            :pais="valor.pais"
            :localidad="valor.localidad"
            :elevacion="valor.elevacion"
            :bibliographic_ref="valor.bibliographic_ref"
            :codigo_genbank="valor.codigo_genbank"
            :marcador_molecular="valor.marcador_molecular"
            :orden="valor.orden"
            :familia="valor.familia"

            :mensaje="valor.mensaje"
            />
          </tbody>
        </table>
       
      </div>
      <!-- <div class="boton-download">
        <button id="boton-download">Descargar informes</button>
      </div> -->
    </section>
</div>
</div>
  </main>
</template>

<script>
// @ is an alias to /src
import api from "@/logic/api"
import Tabla from "@/components/Tabla.vue"
import Alert from "@/components/Alert.vue"
import NavBarLogin from '../components/NavBarLogin.vue'
import Auto from "@/logic/Autenticacion.js"

  export default {
    components: {
        Tabla,
        NavBarLogin,
        Alert
    },
    data:function(){
      return {
        info:[],
        render:false,
      }
    },
    methods: {
      async buscarInfo(){
          // const resultado= await api.obtenerTodo("DatosBiologicos")
          if(Auto.getToken()){
          this.info=Tabla
          this.render=true
          }
      },
      async buscar(){
          const opc=document.getElementById('genero').value
          console.log('El valor es: ',opc)
          var resultado=""
          
          if(opc=='Todo'){
            resultado= await api.obtenerTodo("DatosBiologicos")
          }else{
            resultado= await api.obtenerParasitoGenero(opc)
          }
          this.info = resultado.data
          }
        },
    
  created(){
    this.buscarInfo();    
  }
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
  padding-top: 0;
  padding-left: 2em}
.categoria {
  padding-left: 1em;
  padding-right: 1em;
  width: 500px}
.cat{
  padding-bottom: 1em;
}
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
  margin-bottom: 5em;
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
