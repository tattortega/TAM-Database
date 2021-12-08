<template>
    <tr>
        <td>{{latitud}}</td>
        <td>{{longitud}}</td>
        <td>{{pais}}</td>
        <td>{{localidad}}</td>
        <td>{{elevacion}}</td>
        <td>{{codigo_genbank}}</td>
        <td>{{marcador_molecular}}</td>
        <td>{{orden}}</td>
        <td>{{familia}}</td>
        <td>{{especie}}</td>
        <td>{{genero_parasito}}</td>
        <td>{{bibliographic_ref}}</td>
    </tr>
</template>
<script>
export default {
name:"Tabla",
props:{
    latitud: Number,
    longitud: Number,
    pais: String,
    localidad: String,
    genero_parasito: String,
    bibliographic_ref: String,
    especie: String,
    elevacion: Number,
    codigo_genbank: String,
    marcador_molecular: String,
    orden: String,
    familia: String
}
}
</script>