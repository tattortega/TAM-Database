package com.tamdatabase.tamapi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "datos_biologicos")
public class Datos_biologicos {
    
    @Id
    private String id;
    private Integer key_usuario;
    private Float latitud;
    private Float longitud;
    private String localidad;
    private Float elevacion;
    private String id_pais;
    private String codigo_genbank;
    private String marcador_molecular;
    private String orden;
    private String especie;
    private String familia;
    private String genero_parasito;
    private String bibliographic_ref;

    public Datos_biologicos() {
    }

    public Datos_biologicos(String id, Integer key_usuario, Float latitud, Float longitud,
            String localidad, Float elevacion, String id_pais, String codigo_genbank, String marcador_molecular,
            String orden, String especie, String familia, String genero_parasito, String bibliographic_ref) {

        this.id = id;
        this.key_usuario = key_usuario;
        this.latitud = latitud;
        this.longitud = longitud;
        this.localidad = localidad;
        this.elevacion = elevacion;
        this.id_pais = id_pais;
        this.codigo_genbank = codigo_genbank;
        this.marcador_molecular = marcador_molecular;
        this.orden = orden;
        this.especie = especie;
        this.familia = familia;
        this.genero_parasito = genero_parasito;
        this.bibliographic_ref = bibliographic_ref;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public Integer getKey_usuario() {
        return key_usuario;
    }
    public void setKey_usuario(Integer key_usuario) {
        this.key_usuario = key_usuario;
    }
    public Float getLatitud() {
        return latitud;
    }
    public void setLatitud(Float latitud) {
        this.latitud = latitud;
    }
    public Float getLongitud() {
        return longitud;
    }
    public void setLongitud(Float longitud) {
        this.longitud = longitud;
    }
    public String getLocalidad() {
        return localidad;
    }
    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }
    public Float getElevacion() {
        return elevacion;
    }
    public void setElevacion(Float elevacion) {
        this.elevacion = elevacion;
    }
    public String getId_pais() {
        return id_pais;
    }
    public void setId_pais(String id_pais) {
        this.id_pais = id_pais;
    }
    public String getCodigo_genbank() {
        return codigo_genbank;
    }
    public void setCodigo_genbank(String codigo_genbank) {
        this.codigo_genbank = codigo_genbank;
    }
    public String getMarcador_molecular() {
        return marcador_molecular;
    }
    public void setMarcador_molecular(String marcador_molecular) {
        this.marcador_molecular = marcador_molecular;
    }
    public String getOrden() {
        return orden;
    }
    public void setOrden(String orden) {
        this.orden = orden;
    }
    public String getEspecie() {
        return especie;
    }
    public void setEspecie(String especie) {
        this.especie = especie;
    }
    public String getFamilia() {
        return familia;
    }
    public void setFamilia(String familia) {
        this.familia = familia;
    }
    public String getGenero_parasito() {
        return genero_parasito;
    }
    public void setGenero_parasito(String genero_parasito) {
        this.genero_parasito = genero_parasito;
    }
    public String getBibliographic_ref() {
        return bibliographic_ref;
    }
    public void setBibliographic_ref(String bibliographic_ref) {
        this.bibliographic_ref = bibliographic_ref;
    }
}
