package com.tamdatabase.tamapi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles")
public class Roles {

    @Id
    private String id;
    private String roles_id;
    private String nombre_rol;
    private String descripción;


    public Roles(String id, String roles_id, String nombre_rol, String descripción) {
        this.id=id;
        this.roles_id= roles_id;
        this.nombre_rol = nombre_rol;
        this.descripción = descripción;
    }

    public Roles(){

    }
    public void setId(String id) {
        this.id = id;
    }
    public void setRoles_id(String roles_id) {
        this.roles_id = roles_id;
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
    public String getRoles_id() {
        return roles_id;
    }
    public String getNombre_rol() {
        return nombre_rol;
    }
    public String getDescripción() {
        return descripción;
    }


}
