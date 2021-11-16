package com.tamdatabase.tamapi.repositories;

import com.tamdatabase.tamapi.models.Pais;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaisRepository extends MongoRepository<Pais,String>{
    
}
