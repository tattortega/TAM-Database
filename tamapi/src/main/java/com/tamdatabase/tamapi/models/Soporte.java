package com.tamdatabase.tamapi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "soporte")
public class Soporte {
    
    @Id
    private String id;
    private String usuario;
    private String descripcion;
    private String correo;
    private String identificacion;

    public Soporte(){

    }

    public Soporte(String id, String usuario, String descripcion, String correo, String identificacion) {
        this.id = id;
        this.usuario = usuario;
        this.descripcion = descripcion;
        this.correo = correo;
        this.identificacion = identificacion;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

    public String getId() {
        return id;
    }

    public String getUsuario() {
        return usuario;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public String getCorreo() {
        return correo;
    }

    public String getIdentificacion() {
        return identificacion;
    }

}