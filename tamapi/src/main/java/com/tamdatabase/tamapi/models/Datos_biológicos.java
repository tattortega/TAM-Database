package com.tamdatabase.tamapi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Datos_biologicos")
public class Datos_biológicos {
    
    @Id
    private String id;
    private Integer key_datos_biologicos;
    private Integer key_usuario;
    private Float latitud;
    private Float longitug;
    private String localidad;
    private Float elevacion;
    private Integer key_pais;
    private String codigo_genbank;
    private String marcador_molecular;
    private String orden;
    private String especie;
    private String familia;
    private String genero_parasito;
    private String bibliographic_ref;

    public Datos_biológicos(){

    }


    

    
}
