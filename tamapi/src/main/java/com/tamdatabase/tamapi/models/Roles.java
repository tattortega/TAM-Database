package com.tamdatabase.tamapi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles")
public class Roles {

    @Id
    private String id;
    private String nombre_rol;
    private String descripción;


    public Roles(String id, String nombres_rol, String descripción) {
        this.id= id;
        this.nombre_rol = nombres_rol;
        this.descripción = descripción;
    }

    public Roles(){

    }

    public void setId(String id) {
        this.id = id;
    }
    public void setNombre_rol(String nombre_rol) {
        this.nombre_rol = nombre_rol;
    }
    public void setDescripción(String descripción) {
        this.descripción = descripción;
    }
    public String getId() {
        return id;
    }
    public String getNombre_rol() {
        return nombre_rol;
    }
    public String getDescripción() {
        return descripción;
    }


}
