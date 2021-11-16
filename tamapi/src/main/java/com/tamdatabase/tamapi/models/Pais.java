package com.tamdatabase.tamapi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "pais")
public class Pais {
    
    @Id
    private String id_pais;
    private String nombre;
    
    public Pais() {
    }

    public Pais(String id_pais, String nombre) {
        this.id_pais = id_pais;
        this.nombre = nombre;
    }

    public String getId() {
        return id_pais;
    }

    public void setId(String id_pais) {
        this.id_pais = id_pais;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    
}

