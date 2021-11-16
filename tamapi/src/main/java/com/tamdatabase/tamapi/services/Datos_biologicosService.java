package com.tamdatabase.tamapi.services;

import java.util.List;
import java.util.Optional;

import com.tamdatabase.tamapi.models.Datos_biologicos;
import com.tamdatabase.tamapi.repositories.Datos_biologicosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Datos_biologicosService {
    
    private Datos_biologicosRepository _datos_biologicosRepository;

    @Autowired
    public Datos_biologicosService(Datos_biologicosRepository datos_biologicosRepository){
        this._datos_biologicosRepository = datos_biologicosRepository;
    }

    public void save(Datos_biologicos datos_biologicos){
        this._datos_biologicosRepository.save(datos_biologicos);
    }

    public List<Datos_biologicos> findAll(){
        return this._datos_biologicosRepository.findAll();
    }


    public Optional<Datos_biologicos> findById(String id){
        return this._datos_biologicosRepository.findById(id);
    }

    public void deleteById(String id){
        this._datos_biologicosRepository.deleteById(id);
    }

    public Boolean existById(String id){
        return this._datos_biologicosRepository.existsById(id);
    }
}
