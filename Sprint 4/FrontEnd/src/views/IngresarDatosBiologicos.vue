<template >
      <main>
          <NavBarLogin/>
           <Alert texto="Inicie sesion" v-if="!render"/>
    <div v-if="render">
        <div>
            <p class="parrafo">
                A continuación usted podrá ingresar los datos biologicos para
                registrarlos en la base de datos.
            </p>
    

    <form action="/IngresarDatosBiologicos" >
        <div class="grid-container1">
            <div class="grid-item">
                <h2>Ingrese datos manualmente:</h2>
            </div>
            <div class="grid-item"></div>

            <div class="grid-item">
                <h3>Información Geográfica</h3>
            </div>
            <div class="grid-item">
                <h3>Información Taxonómica del Ave Hospedera</h3>
            </div>

            <div class="grid-item">
                <label for="latitud"> Latitud (decimal):*</label>
                <input type="number" step="any" size="35" name="latitud" id= "latitud" required>
            </div>
            <div class="grid-item">
                <label for="orden"> Orden:*</label>
                <input type="text" size="35" name="orden" id="orden" required/>
            </div>

            <div class="grid-item">
                <label for="longitud"> Longitud (decimal):*</label>
               <input type="number" step="any" size="35" name="longitud" id="longitud" required>
            </div>
            <div class="grid-item">
                <label for="familia" > Familia:</label>
                <input type="text" size="35" name="familia" id="familia"/>
            </div>

            <div class="grid-item">
                <label for="pais" > País:*</label>
                <select style="width: 20.5em" id="pais" required >
                    <option value="">Selecciona una opción</option>
                    <option value="Afganistán">Afganistán</option>
                    <option value="Albania">Albania</option>
                    <option value="Alemania">Alemania</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antártida">Antártida</option>
                    <option value="Antigua Y Barbuda">Antigua Y Barbuda</option>
                    <option value="Antillas Holandesas">Antillas Holandesas</option>
                    <option value="Arabia Saudita">Arabia Saudita</option>
                    <option value="Argelia">Argelia</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaiyán">Azerbaiyán</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrein">Bahrein</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Bélgica">Bélgica</option>
                    <option value="Belice">Belice</option>
                    <option value="Benín">Benín</option>
                    <option value="Bermudas">Bermudas</option>
                    <option value="Bhután">Bhután</option>
                    <option value="Bielorrusia">Bielorrusia</option>
                    <option value="Birmania">Birmania</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia Y Herzegovina">Bosnia Y Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Camboya">Camboya</option>
                    <option value="Camerún">Camerún</option>
                    <option value="Canadá">Canadá</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Chipre">Chipre</option>
                    <option value="Ciudad Estado Del Vaticano">Ciudad Estado Del Vaticano</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comores">Comores</option>
                    <option value="Congo">Congo</option>
                    <option value="Corea Del Norte">Corea Del Norte</option>
                    <option value="Corea Del Sur">Corea Del Sur</option>
                    <option value="Costa Del Marfil">Costa Del Marfil</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Croacia">Croacia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Dinamarca">Dinamarca</option>
                    <option value="Djibouri">Djibouri</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egipto">Egipto</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Eslovaquia">Eslovaquia</option>
                    <option value="Eslovenia">Eslovenia</option>
                    <option value="España">España</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Etiopía">Etiopía</option>
                    <option value="Exrepública Yugoslava De Macedonia">Exrepública Yugoslava De Macedonia</option>
                    <option value="Filipinas">Filipinas</option>
                    <option value="Finlandia">Finlandia</option>
                    <option value="Francia">Francia</option>
                    <option value="Gabón">Gabón</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Georgia Del Sur Y Las Islas Sandwich Del Sur">Georgia Del Sur Y Las Islas Sandwich Del Sur</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Granada">Granada</option>
                    <option value="Grecia">Grecia</option>
                    <option value="Groenlandia">Groenlandia</option>
                    <option value="Guadalupe">Guadalupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guayana">Guayana</option>
                    <option value="Guayana Francesa">Guayana Francesa</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea Bissau">Guinea Bissau</option>
                    <option value="Guinea Ecuatorial">Guinea Ecuatorial</option>
                    <option value="Haití">Haití</option>
                    <option value="Holanda">Holanda</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungría">Hungría</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Irak">Irak</option>
                    <option value="Irán">Irán</option>
                    <option value="Irlanda">Irlanda</option>
                    <option value="Isla De Bouvet">Isla De Bouvet</option>
                    <option value="Isla De Christmas">Isla De Christmas</option>
                    <option value="Isla Heard E Islas Mcdonald">Isla Heard E Islas Mcdonald</option>
                    <option value="Isla Norfolk">Isla Norfolk</option>
                    <option value="Isla Pitcairn">Isla Pitcairn</option>
                    <option value="Islandia">Islandia</option>
                    <option value="Islas Caimán">Islas Caimán</option>
                    <option value="Islas Cook">Islas Cook</option>
                    <option value="Islas De Cocos O De Keeling">Islas De Cocos O De Keeling</option>
                    <option value="Islas De Faroe">Islas De Faroe</option>
                    <option value="Islas Fiyi">Islas Fiyi</option>
                    <option value="Islas Malvinas">Islas Malvinas</option>
                    <option value="Islas Marianas Del Norte">Islas Marianas Del Norte</option>
                    <option value="Islas Marshall">Islas Marshall</option>
                    <option value="Islas Menores De Estados Unidos">Islas Menores De Estados Unidos</option>
                    <option value="Islas Palau">Islas Palau</option>
                    <option value="Islas Salomón">Islas Salomón</option>
                    <option value="Islas Tokelau">Islas Tokelau</option>
                    <option value="Islas Turks Y Caicos">Islas Turks Y Caicos</option>
                    <option value="Islas Vírgenes (Estados Unidos)">Islas Vírgenes (Estados Unidos)</option>
                    <option value="Islas Vírgenes (Reino Unido)">Islas Vírgenes (Reino Unido)</option>
                    <option value="Israel">Israel</option>
                    <option value="Italia">Italia</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japón">Japón</option>
                    <option value="Jordania">Jordania</option>
                    <option value="Kazajstán">Kazajstán</option>
                    <option value="Kenia">Kenia</option>
                    <option value="Kirguizistán">Kirguizistán</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Laos">Laos</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Letonia">Letonia</option>
                    <option value="Líbano">Líbano</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libia">Libia</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lituania">Lituania</option>
                    <option value="Luxemburgo">Luxemburgo</option>
                    <option value="Macao">Macao</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malasia">Malasia</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Maldivas">Maldivas</option>
                    <option value="Malí">Malí</option>
                    <option value="Malta">Malta</option>
                    <option value="Marruecos">Marruecos</option>
                    <option value="Martinica">Martinica</option>
                    <option value="Mauricio">Mauricio</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="México">México</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldavia">Moldavia</option>
                    <option value="Mónaco">Mónaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Naurú">Naurú</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Níger">Níger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Noruega">Noruega</option>
                    <option value="Nueva Caledonia">Nueva Caledonia</option>
                    <option value="Nueva Zelanda">Nueva Zelanda</option>
                    <option value="Omán">Omán</option>
                    <option value="Países Bajos">Países Bajos</option>
                    <option value="Pakistán">Pakistán </option>
                    <option value="Panamá">Panamá</option>
                    <option value="Papua Nueva Guinea">Papua Nueva Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Perú">Perú</option>
                    <option value="Polinesia Francesa">Polinesia Francesa</option>
                    <option value="Polonia">Polonia</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reino Unido">Reino Unido</option>
                    <option value="República Centroafricana">República Centroafricana</option>
                    <option value="República Checa">República Checa</option>
                    <option value="República De Sudáfrica">República De Sudáfrica</option>
                    <option value="República Democrática Del Congo">República Democrática Del Congo</option>
                    <option value="República Dominicana">República Dominicana</option>
                    <option value="Reunión">Reunión</option>
                    <option value="Ruanda">Ruanda</option>
                    <option value="Rumania">Rumania</option>
                    <option value="Rusia">Rusia</option>
                    <option value="Saint Kitts (San Cristóbal) Y Nevis">Saint Kitts (San Cristóbal) Y Nevis</option>
                    <option value="Samoa">Samoa</option>
                    <option value="Samoa Occidental">Samoa Occidental</option>
                    <option value="San Marino">San Marino</option>
                    <option value="San Pierre Y Miquelon">San Pierre Y Miquelon</option>
                    <option value="San Vicente E Islas Granadinas">San Vicente E Islas Granadinas</option>
                    <option value="Santa Helena">Santa Helena</option>
                    <option value="Santa Lucía">Santa Lucía</option>
                    <option value="Santo Tomé Y Príncipe">Santo Tomé Y Príncipe</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leona">Sierra Leona</option>
                    <option value="Singapur">Singapur</option>
                    <option value="Siria">Siria</option>
                    <option value="Somalia">Somalia</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudán">Sudán</option>
                    <option value="Suecia">Suecia</option>
                    <option value="Suiza">Suiza</option>
                    <option value="Surinam">Surinam</option>
                    <option value="Svalbard E Islas Jan Mayen">Svalbard E Islas Jan Mayen</option>
                    <option value="Swazilandia">Swazilandia</option>
                    <option value="Tailandia">Tailandia</option>
                    <option value="Taiwán">Taiwán</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Tayikistán">Tayikistán</option>
                    <option value="Territorios Británicos Del Océano Indico">Territorios Británicos Del Océano Indico</option>
                    <option value="Territorios Franceses Del Sur">Territorios Franceses Del Sur</option>
                    <option value="Togo">Togo</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad Y Tobago">Trinidad Y Tobago</option>
                    <option value="Túnez">Túnez</option>
                    <option value="Turkmenistán">Turkmenistán</option>
                    <option value="Turquía">Turquía</option>
                    <option value="Tuvalú">Tuvalú</option>
                    <option value="Ucrania">Ucrania</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Unión De Emiratos Árabes">Unión De Emiratos Árabes</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistán">Uzbekistán</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Wallis E Islas Futuna">Wallis E Islas Futuna</option>
                    <option value="Yemén">Yemén</option>
                    <option value="Yugoslavia">Yugoslavia</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                </select>
            </div>
            <div class="grid-item">
                <label for="especie" > Especie:*</label>
                <input type="text" size="35" name="especie" id= "especie" required/>
            </div>

            <div class="grid-item">
                <label for="localidad"> Localidad:</label>
                <input type="text" size="35" name="localidad" id="localidad"/>
            </div>
            <div class="grid-item">
                <h3>Información Taxonómica del Parásito</h3>
            </div>

            <div class="grid-item">
                <label for="elevacion"> Elevación (mts):</label>
                <input type="number" step="any" size="35" name="elevacion" id="elevacion"/>
            </div>
            <div class="grid-item">
                <label for="genero"> Género:*</label>
                <input type="text" size="35" name="genero" id = "genero_parasito" required/>
            </div>

            <div class="grid-item">
                <h3>Información Genética</h3>
            </div>
            <div class="grid-item">
                <h3>Información Bibliográfica</h3>
            </div>

            <div class="grid-item">
                <label for="codigo genbank"> Código Genbank:*</label>
                <input type="text" size="35" name="Codigo Genbank" id="codigo_genbank" required/>
            </div>
            <div class="grid-item">
                <p>Si ha realizado una publicación ingrese la cita bibliográfica
                    (Ej: Gil-Vargas et al., 2020), de lo contrario ingrese NA
                </p>
            </div>

            <div class="grid-item">
                <label for="marcador molecular"> Marcador Molecular:*</label>
                <input type="text" size="35" name="marcador molecular" id = "marcador_molecular" required/>
            </div>
            <div class="grid-item">
                <label for="referencia"> Referencia:*</label>
                <input type="text" size="35" name="referencia" id ="bibliographic_ref" required/>
            </div>

            <div class="grid-item">
                <label for="text">*Campos requeridos</label>
            </div>
            <div class="grid-item">
                <button @click="ingresar" class="button formbutt" type="submit">Ingresar Datos</button>
            </div>                        
        </div>
    </form>
    </div>
</div>
</main>
</template>

<script>
import Alert from "@/components/Alert.vue"
import api from "../logic/api";
import NavBarLogin from "@/components/NavBarLogin.vue";
import Auto from "@/logic/Autenticacion.js"

export default {
    name:"IngresarDatosBiologicos", 
    components:{
        NavBarLogin,
        Alert
    },
    
    data:function(){
    return{
      info:[],
      render:false     
    }
    },
    methods:{
          async buscarInfo(){
          if(Auto.getToken()){
        //   this.info=Tabla
          this.render=true
          }
      },
        async ingresar(){
            const latitud = document.getElementById('latitud').value;
            const longitud = document.getElementById('longitud').value;
            const orden = document.getElementById('orden').value;
            const familia = document.getElementById('familia').value;
            const pais = document.getElementById('pais').value;
            const especie = document.getElementById('especie').value;
            const localidad = document.getElementById('localidad').value;
            const elevacion = document.getElementById('elevacion').value;
            const genero_parasito = document.getElementById('genero_parasito').value;
            const codigo_genbank = document.getElementById('codigo_genbank').value;
            const marcador_molecular = document.getElementById('marcador_molecular').value;
            const bibliographic_ref = document.getElementById('bibliographic_ref').value;

            if (latitud === '' || orden === '' || longitud === '' || pais === '' || especie === '' || genero_parasito === ''
                || codigo_genbank === '' || marcador_molecular === '' || bibliographic_ref === ''){
                    alert("Los campos obligatorios no pueden estar vacíos");
            }           
            else {
                await api.ingresarDatosBiologicos("DatosBiologicos",{
                latitud:latitud,
                longitud:longitud,
                orden:orden,
                familia:familia,
                pais:pais,
                especie:especie,
                localidad:localidad,    
                elevacion:elevacion,
                genero_parasito:genero_parasito,
                codigo_genbank:codigo_genbank,
                marcador_molecular:marcador_molecular,
                bibliographic_ref:bibliographic_ref,
                token: Auto.getToken()
            })
                alert("Registro de datos biológicos exitoso");              
            }
        }
    },
    created(){
    this.buscarInfo();    
  }
    
}
</script>

<style scoped>
input[type=number]{
    width: 20.2em;
}
h3{
    font-family: "Quicksand";
} 
  .grid-container1 {
    background-color: rgba(35, 0, 130, 0.178);
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 30px;
    border: solid;
    border-radius: 1em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-color: indigo;
    margin: 2em;
    margin-top: 3em;
    margin-bottom: 5em;
    padding: 1em;
    padding-left: 65px;
    align-items: center;
  }

.grid-container2 {
  background-color: rgba(35, 0, 130, 0.178);
  display: grid;
  grid-template-columns: auto;
  border: solid;
  border-radius: 1em;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-color: indigo;
  margin: 2em;
  margin-top: 0;
  margin-bottom: 6.5em;
  padding: 1em;
  padding-left: 100px;
  align-items: center;
}

.grid-container3 {
  background-color: rgba(35, 0, 130, 0.178);
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 60px;
  border: solid;
  border-radius: 6px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-color: indigo;
  margin: 0.5em;
  margin-bottom: 0;
  padding: 1em;
  align-items: center;
}

.grid-item label{
  display: block;
}

.grid-item {
  padding: 5px;
  font-size: 22px;
  padding-right: 2em;
}

.parrafo {
  padding: 25px;
  padding-bottom: 0;
  padding-right: 2em;
  padding-left: 2em;
}
  body {
    margin: 0;
    padding: 0;
    border: 0;
    background: linear-gradient(to bottom right,  #69af9d83, #fffffd8c);
    text-align: justify;
  }

.formbutt {
  background-color: indigo;
  border-color: indigo;
  border: 1px indigo solid;
  color: white;
  text-align: center;
  border-radius: 1em;
  text-decoration: none;
  display: inline-block;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin:4px 2px;
  cursor:pointer;
  height: 50px;
  width: 190px;
}


.formbutt:hover{
  background-color: rgba(35, 0, 130, 0.178);
  text-decoration: #44ab5e;
}

.button2 {
  background-color: rgba(35, 0, 130, 0.452);
}

.custom-input-file {
  background-color: rgba(35, 0, 130, 0.452);
  border: 1px rgba(35, 0, 130, 0.452) solid;
  border-radius: 1em;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  min-height: 15px;
  overflow: hidden;
  padding: 15px;
  position: relative;
  text-align: center;
  width: 163px;
  display: inline-block;
 
  
}

.custom-input-file:hover {
  background-color: rgba(35, 0, 130, 0.178);
  text-decoration: #44ab5e;
}

.custom-input-file .input-file {
 border: 10000px solid transparent;
 cursor: pointer;
 font-size: 10000px;
 margin: 0;
 opacity: 0;
 outline: 0 none;
 padding: 0;
 position: absolute;
 right: -1000px;
 top: -1000px;
}

.item { 
  grid-area: footer; 
  font-size: 15px;
}

</style>