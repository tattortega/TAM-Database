<template >
      <main>
          <NavBarLogin/>
            <p class="parrafo">
                Para importar los datos a la plataforma tendrá dos opciones:</p>
            <p class="parrafo">
                En la <b>opción 1</b> para 10 registros o menos usted podrá ingresar
                los datos manualmente y en la <b>opción 2</b>, para registros mayores
                a 10 o masivos se recomienda el uso de un archivo en formato .xlsx
            </p>
    

    <form action="" method="GET">
        <div class="grid-container1">
            <div class="grid-item">
                <h2>OPCIÓN 1:Ingrese datos manualmente</h2>
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
                <input type="text" size="35" name="latitud" id= "latitud" required>
            </div>
            <div class="grid-item">
                <label for="orden"> Orden:*</label>
                <input type="text" size="35" name="orden" id="orden" required/>
            </div>

            <div class="grid-item">
                <label for="longitud"> Longitud (decimal):*</label>
               <input type="text" size="35" name="longitud" id="longitud" required>
            </div>
            <div class="grid-item">
                <label for="familia" > Familia:</label>
                <input type="text" size="35" name="familia" id="familia"/>
            </div>

            <div class="grid-item">
                <label for="pais" > País:*</label>
                <input type="text" size="35" name="pais" id="pais" required/>
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
                <input type="text" size="35" name="elevacion" id="elevacion"/>
            </div>
            <div class="grid-item">
                <label for="genero"> Género:*</label>
                <input type="text" size="35" name="genero" id = "genero" required/>
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
                <input type="text" size="35" name="referencia" id ="referencia" required/>
            </div>

            <div class="grid-item">
                <label for="text">*Campos requeridos</label>
            </div>
            <div class="grid-item">
                <button @click="ingresar" class="button formbutt" type="submit">Ingresar Datos</button>
            </div>                        
        </div>
    </form>


    <form action="" method="POST">
        <div class="grid-container2">
            <div class="grid-item">
                <hgroup>
                    <h2>OPCIÓN 2:Cargue datos con la hoja de cálculo
                        en TAM DATABASE</h2>
                </hgroup>
                <p>
                    Esta opción es recomendada para importar grandes volúmenes de datos. 
                    Por lo tanto, esta opción tiene requisitos específicos
                    para el archivo: el tipo de archivo debe ser un .xlsx y se 
                    deberá eliminar la primera fila de este archivo antes de 
                    subir sus datos, pues está fila de encabezado solo sirve 
                    como una guía para la organización de sus datos.
                </p>
                <a href="./EjemploFormularioDatos.xlsx">Puede descargar el ejemplo del archivo .xlsx dando click aquí</a>

                <h3>Importe un archivo</h3>

                <p>
                    Escoja un archivo para importar
                </p>
                <div class="custom-input-file col-md-6 col-sm-6 col-xs-6">
                    <input type="file" id="ArchivoDatos" class="input-file" 
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    value="">
                    Selecciona archivo
                </div>
                <p>
                    <button class="button2 formbutt" type="reset">Cancelar</button>
                </p>
                 <p>
                    <button @click="ingresar" class="button formbutt" type="submit">Enviar archivo</button>
                </p>
            </div>
        </div>
    </form> 
</main>
</template>

<script>

import api from "../logic/api";
import NavBarLogin from "@/components/NavBarLogin.vue";

export default {
    name:"IngresarDatosBiologicos", 
    components:{
        NavBarLogin,
    },
    methods:{
        async ingresar(){
            const latitud = document.getElementById('latitud').value;
            const longitud = document.getElementById('longitud').value;
            const orden = document.getElementById('orden').value;
            const familia = document.getElementById('familia').value;
            const pais = document.getElementById('pais').value;
            const especie = document.getElementById('especie').value;
            const localidad = document.getElementById('localidad').value;
            const elevacion = document.getElementById('elevacion').value;
            const genero = document.getElementById('genero').value;
            const codigo_genbank = document.getElementById('codigo_genbank').value;
            const marcador_molecular = document.getElementById('marcador_molecular').value;
            const referencia = document.getElementById('referencia').value;

            if (latitud === '' || orden === '' || longitud === '' || pais === '' || especie === '' || genero === ''
                || codigo_genbank === '' || marcador_molecular === '' || referencia === ''){
                    alert("Los campos obligatorios no pueden estar vacíos");
            }
            else {
                await api.ingresar("DatosBiologicos",{
                latitud:latitud,
                longitud:longitud,
                orden:orden,
                familia:familia,
                pais:pais,
                especie:especie,
                localidad:localidad,    
                elevacion:elevacion,
                genero:genero,
                codigo_genbank:codigo_genbank,
                marcador_molecular:marcador_molecular,
                referencia:referencia
            })
                alert("Registro de datos biológicos exitoso");               
            }
        }
    }
}
</script>

<style>
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
    margin-bottom: 0;
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
  padding: 15px 32px;
  text-align: center;
  border-radius: 1em;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  margin:4px 2px;
  cursor:pointer;
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