<template>
  <div class="main">
    <section class="section">
      <div>
        <form action="contactar_soporte.html" method="POST">
          <strong>
            <h3>ENVÍA TU SOLICITUD</h3>
          </strong>
          <div class="lbl">
            <label for="nombre"
              >Nombre completo:
              <input type="text" name="nombre" id="nombre" size="50" required />
            </label>
            <label for="doc"
              >N° documento de identificación:
              <input
                type="number"
                name="doc"
                id="doc"
                size="50"
                required
                min="1"
              />
            </label>
            <label for="email"
              >Correo Electrónico:
              <input type="email" name="email" id="email" size="50" required />
            </label>
            <label for="desc"
              >Descripción de la solicitud:
              <textarea
                name="desc"
                cols="52"
                rows="10"
                id="desc"
                required
              ></textarea>
            </label>
          </div>
          <br />
          <button onclick="contactar_soporte()" type="submit">
            <b>Enviar solicitud</b>
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

  a:hover{
      color: rgb(226, 238, 55);
  }
  
  input{  
    text-align: left;
    background-color: #fbfbfb; 
    width: 90%; 
    height: 40px; 
    border-style: solid; 
    border-width: 1px; 
    border-color: indigo; 
    margin-top: 10px;  
    padding-left: 10px;
    margin-bottom: 20px; 
  }

  .lbl label{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: indigo;
  }

  .lbl input,textarea{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: indigo;
    font-size: 20px;
  }
  
  textarea{
    background-color: #fbfbfb; 
    width: 90%; 
    height: 150px; 
    border-style: solid; 
    border-width: 1px; 
    border-color: indigo; 
    margin-top: 10px;  
    padding-left: 10px;
    margin-bottom: 20px; 
    padding-top: 15px; 
  }
  
  label{
    display: block; 
    float: center; 
    padding: 1px; 
    margin: 1px; 
    font-size: 20px;
    text-align: left;
    padding-left: 15px;
  }
  
  button{
    height: 45px; 
    padding-top: -150px; 
    padding: auto;
    background-color: indigo; 
    border: 1px indigo solid;
    border-radius: 15px;  
    width: 190px;    
    cursor: pointer;    
  }


  button:hover{
    background-color: rgba(35, 0, 130, 0.178);
  }
  button b{
  font-size: 15px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  }

  .section{
    background-color: rgba(35, 0, 130, 0.178);
    border: solid;
    border-radius: 6px;
    border-color: indigo;
    text-align: center;
    width: 90%;
    max-width: 35%;
    margin: 3em auto;
    margin-bottom: 6.5em;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    padding: 1em;
  }

strong h3{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: indigo;
}
</style>
