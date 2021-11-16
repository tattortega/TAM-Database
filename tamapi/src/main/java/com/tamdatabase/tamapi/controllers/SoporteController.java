package com.tamdatabase.tamapi.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tamdatabase.tamapi.models.Soporte;
import com.tamdatabase.tamapi.services.SoporteService;

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
public class SoporteController {
    private SoporteService _soporteService;

    @Autowired
    public SoporteController(SoporteService soporteService){
        this._soporteService = soporteService;
    }

    @GetMapping("/soporte")
    public List<Soporte>   findAll(){
        return this._soporteService.findAll();
    }

    @PostMapping("/soporte")
    ResponseEntity<Map<String,String>> save(@RequestBody Soporte soporte){
        this._soporteService.save(soporte);
        Map<String,String> response = new HashMap<>();
        response.put("mensaje","El registro de soporte se ha registrado correctamente");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/soporte")
    ResponseEntity<Map<String,String>> update(@RequestBody Soporte soporte){
        this._soporteService.save(soporte);
        Map<String,String> response = new HashMap<>();
        response.put("mensaje","El registro de soporte se ha actualizado correctamente");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/soporte/{id}")
    ResponseEntity<Map<String,String>> delete(@PathVariable String id){
        Boolean existeSoporte = this._soporteService.existById(id);
        Map<String,String> response = new HashMap<>();
        if(!existeSoporte){
            response.put("mensaje", "El registro de soporte no existe en la base de datos");
            return ResponseEntity.ok(response);
        }
        this._soporteService.deleteById(id);;        
        response.put("mensaje","El registro de soporte se ha eliminado correctamente");
        return ResponseEntity.ok(response);
    }
}

