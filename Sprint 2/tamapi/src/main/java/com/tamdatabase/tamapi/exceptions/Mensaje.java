package com.tamdatabase.tamapi.exceptions;

public class Mensaje {
    private String type;
    private String mensaje;

    public Mensaje(String type, String mensaje){
        this.type = type;
        this.mensaje = mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMensaje() {
        return mensaje;
    }

    public String getType() {
        return type;
    }
}
