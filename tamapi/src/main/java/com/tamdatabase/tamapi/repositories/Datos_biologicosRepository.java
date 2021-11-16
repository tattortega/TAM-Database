package com.tamdatabase.tamapi.repositories;

import com.tamdatabase.tamapi.models.Datos_biologicos;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Datos_biologicosRepository extends MongoRepository<Datos_biologicos,String> {
    
}
