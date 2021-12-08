<template>
<div class="contenedor-alert">
    <div class="info"><a href="/">{{texto}}</a></div>
    
</div>
  
</template>

<script>
export default {
    name:"Alert",
    props:{
        texto: String
    }
}
</script>

<style scoped>
.contenedor-alert{
    display: flex;
    width: 98vw;
    height: 100vh;
    z-index: 1;
    position: center;
    
    justify-content: center;
    align-items: flex-start;
    padding-top : 20px;
}
.info{
    display: flex;
    width: 300px;
    height: 50px;
    background-color: rgba(100, 148, 237, 0.397);
    justify-content: center;
    align-items: center;
    border-radius: 5px;

}
span{
    font-size: 22px;
}
</style>