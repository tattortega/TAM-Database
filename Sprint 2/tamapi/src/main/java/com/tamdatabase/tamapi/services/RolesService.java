package com.tamdatabase.tamapi.services;

import java.util.List;
import java.util.Optional;

import com.tamdatabase.tamapi.models.Roles;
import com.tamdatabase.tamapi.repositories.RolesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolesService {
    
    private RolesRepository _rolesRepository;

    @Autowired
    public RolesService(RolesRepository rolesRepository){
        this._rolesRepository = rolesRepository;
    }

    public void save(Roles roles){
        this._rolesRepository.save(roles);
    }

    public List<Roles> findAll(){
        return this._rolesRepository.findAll();
    }


    public Optional<Roles> findById(String id){
        return this._rolesRepository.findById(id);
    }

    public void deleteById(String id){
        this._rolesRepository.deleteById(id);
    }

    public Boolean existById(String id){
        return this._rolesRepository.existsById(id);
    }
}
