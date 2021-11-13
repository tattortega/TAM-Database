package com.tamdatabase.tamapi.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tamdatabase.tamapi.models.Usuarios;
import com.tamdatabase.tamapi.services.UsuariosService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UsuariosController {
    private UsuariosService _usuariosService;

    @Autowired
    public UsuariosController(UsuariosService usuariosService){
        this._usuariosService = usuariosService;
    }

    @GetMapping("/usuarios")
    public List<Usuarios> findAll()
    {
        return this._usuariosService.findAll();
    }

    @PostMapping("/usuarios")
    ResponseEntity<Map<String,String>> save(@RequestBody Usuarios usuarios){
        this._usuariosService.save(usuarios);
        Map<String,String> response = new HashMap<>();
        response.put("mensaje","El usuario se ha registrado correctamente");
        return ResponseEntity.ok(response);

    }

    @PutMapping("/usuarios")
    ResponseEntity<Map<String,String>> update(@RequestBody Usuarios usuarios){
        this._usuariosService.save(usuarios);
        Map<String,String> response = new HashMap<>();
        response.put("mensaje","El usuario se ha actualizado correctamente");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/usuarios/{id}")
    ResponseEntity<Map<String,String>> delete(@PathVariable String id){
        Boolean existeUsuarios = this._usuariosService.existById(id);
        Map<String,String> response = new HashMap<>();
        if(!existeUsuarios){
            response.put("mensaje","El usuario no existe en la base datos");
            return ResponseEntity.ok(response);
        }
        this._usuariosService.deleteById(id);
        response.put("mensaje","El usuario se ha eliminado correctamente");
        return ResponseEntity.ok(response);
    }

}