package com.tamdatabase.tamapi.repositories;

import java.util.Optional;

import com.tamdatabase.tamapi.models.Usuarios;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuariosRepository extends MongoRepository<Usuarios,String> {
    
    public Optional<Usuarios> findByUsuario(String usuario);
}
