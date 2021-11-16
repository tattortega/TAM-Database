package com.tamdatabase.tamapi.services;

import java.util.List;
import java.util.Optional;

import com.tamdatabase.tamapi.models.Soporte;
import com.tamdatabase.tamapi.repositories.SoporteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SoporteService {
    private SoporteRepository soporteRepository;

    @Autowired
    public SoporteService(SoporteRepository soporteRepository){
        this.soporteRepository = soporteRepository;
    }

    public void save(Soporte soporte){
        this.soporteRepository.save(soporte);
    }

    public List<Soporte> findAll(){
        return this.soporteRepository.findAll();
    }


    public Optional<Soporte> findById(String id){
        return this.soporteRepository.findById(id);
    }

    public void deleteById(String id){
        this.soporteRepository.deleteById(id);
    }

    public Boolean existById(String id){
        return this.soporteRepository.existsById(id);
    }

    public Soporte findByUsername(String username){
        return this.soporteRepository.findById(username).orElse(new Soporte());
    }
}

