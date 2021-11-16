package com.tamdatabase.tamapi.services;

import java.util.List;
import java.util.Optional;

import com.tamdatabase.tamapi.models.Usuarios;
import com.tamdatabase.tamapi.repositories.UsuariosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuariosService {
    
    private UsuariosRepository _usuariosRepository;

    @Autowired
    public UsuariosService(UsuariosRepository usuariosRepository){
        this._usuariosRepository = usuariosRepository;
    }

    public void save(Usuarios usuarios){
        this._usuariosRepository.save(usuarios);
    }

    public List<Usuarios> findAll(){
        return this._usuariosRepository.findAll();
    }


    public Optional<Usuarios> findById(String id){
        return this._usuariosRepository.findById(id);
    }

    public void deleteById(String id){
        this._usuariosRepository.deleteById(id);
    }

    public Boolean existById(String id){
        return this._usuariosRepository.existsById(id);
    }

    public Usuarios findByUsuario(String usuario){
        return this._usuariosRepository.findByUsuario(usuario).orElse(new Usuarios());
    }
}
