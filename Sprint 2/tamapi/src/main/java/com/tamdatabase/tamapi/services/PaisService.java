package com.tamdatabase.tamapi.services;

import java.util.List;
import java.util.Optional;

import com.tamdatabase.tamapi.models.Pais;
import com.tamdatabase.tamapi.repositories.PaisRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaisService {
    private PaisRepository paisRepository;

    @Autowired
    public PaisService(PaisRepository paisRepository){
        this.paisRepository = paisRepository;
    }

    public void save(Pais pais){
        this.paisRepository.save(pais);
    }

    public List<Pais> findAll(){
        return this.paisRepository.findAll();
    }


    public Optional<Pais> findById(String id){
        return this.paisRepository.findById(id);
    }

    public void deleteById(String id){
        this.paisRepository.deleteById(id);
    }

    public Boolean existById(String id){
        return this.paisRepository.existsById(id);
    }

    public Pais findByUsername(String username){
        return this.paisRepository.findById(username).orElse(new Pais());
    }
}
