package com.tamdatabase.tamapi.repositories;

import com.tamdatabase.tamapi.models.Roles;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolesRepository extends MongoRepository<Roles,String> {
    
}
