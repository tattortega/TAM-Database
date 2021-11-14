package com.tamdatabase.tamapi.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tamdatabase.tamapi.models.Pais;
import com.tamdatabase.tamapi.services.PaisService;

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
public class PaisController {
    private PaisService _paisService;

    @Autowired
    public PaisController(PaisService paisService){
        this._paisService = paisService;
    }

    @GetMapping("/paises")
    public List<Pais>   findAll(){
        return this._paisService.findAll();
    }

    @PostMapping("/paises")
    ResponseEntity<Map<String,String>> save(@RequestBody Pais pais){
        this._paisService.save(pais);
        Map<String,String> response = new HashMap<>();
        response.put("mensaje","El pais se ha registrado correctamente");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/paises")
    ResponseEntity<Map<String,String>> update(@RequestBody Pais pais){
        this._paisService.save(pais);
        Map<String,String> response = new HashMap<>();
        response.put("mensaje","El pais se ha actualizado correctamente");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/paises/{id}")
    ResponseEntity<Map<String,String>> delete(@PathVariable String id){
        Boolean existePais = this._paisService.existById(id);
        Map<String,String> response = new HashMap<>();
        if(!existePais){
            response.put("mensaje", "El pais no existe en la base de datos");
            return ResponseEntity.ok(response);
        }
        this._paisService.deleteById(id);;        
        response.put("mensaje","El pais se ha eliminado correctamente");
        return ResponseEntity.ok(response);
    }
}