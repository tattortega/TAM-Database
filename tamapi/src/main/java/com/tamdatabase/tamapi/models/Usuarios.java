package com.tamdatabase.tamapi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Usuarios")
public class Usuarios {

    @Id
    private String id;
    private Integer key_usuario;
    private String nombres;
    private String apellidos;
    private String correo;
    private Integer estado;
    private Integer roles_id;
    private String contraseña;


    public Usuarios(String id,Integer key_usuario, String nombres, String apellidos, String correo, Integer estado, Integer roles_id,
            String contraseña) {
        this.id= id;
        this.key_usuario = key_usuario;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correo = correo;
        this.estado = estado;
        this.roles_id = roles_id;
        this.contraseña = contraseña;
    }

    public Usuarios(){

    }

    public void setId(String id) {
        this.id = id;
    }

    public void setKey_usuario(Integer key_usuario) {
        this.key_usuario = key_usuario;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public void setApellidos(String apellidos){
        this.apellidos = apellidos;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    public void setRoles_id(Integer roles_id) {
        this.roles_id = roles_id;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public String getId() {
        return id;
    }

    public Integer getKey_usuario() {
        return key_usuario;
    }

    public String getNombres() {
        return nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public String getCorreo() {
        return correo;
    }

    public Integer getEstado() {
        return estado;
    }

    public Integer getRoles_id() {
        return roles_id;
    }

    public String getContraseña() {
        return contraseña;
    }


}