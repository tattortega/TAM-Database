package com.tamdatabase.tamapi.repositories;

import com.tamdatabase.tamapi.models.Soporte;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SoporteRepository extends MongoRepository<Soporte,String>{
    
}
