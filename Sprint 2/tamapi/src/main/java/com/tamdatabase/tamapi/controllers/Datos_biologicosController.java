package com.tamdatabase.tamapi.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tamdatabase.tamapi.models.Datos_biologicos;
import com.tamdatabase.tamapi.services.Datos_biologicosService;

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
public class Datos_biologicosController {
    private Datos_biologicosService _datos_biologicosService;

    @Autowired
    public Datos_biologicosController(Datos_biologicosService datos_biologicosService) {
        this._datos_biologicosService = datos_biologicosService;
    }
    
    @GetMapping("/datos_biologicos")
    public List<Datos_biologicos> findAll()
    {
        return this._datos_biologicosService.findAll();
    }

    @PostMapping("/datos_biologicos")
    ResponseEntity<Map<String,String>> save(@RequestBody Datos_biologicos datos_biologicos){
        this._datos_biologicosService.save(datos_biologicos);
        Map<String,String> response = new HashMap<>();
        response.put("mensaje","Los datos biológicos se han registrado correctamente");
        return ResponseEntity.ok(response);

    }

    @PutMapping("/datos_biologicos")
    ResponseEntity<Map<String,String>> update(@RequestBody Datos_biologicos datos_biologicos){
        this._datos_biologicosService.save(datos_biologicos);
        Map<String,String> response = new HashMap<>();
        response.put("mensaje","Los datos biológicos se han actualizado correctamente");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/datos_biologicos/{id}")
    ResponseEntity<Map<String,String>> delete(@PathVariable String id){
        Boolean existeDatosBiologicos = this._datos_biologicosService.existById(id);
        Map<String,String> response = new HashMap<>();
        if(!existeDatosBiologicos){
            response.put("mensaje","Los datos biológicos no existen en la base datos");
            return ResponseEntity.ok(response);
        }
        this._datos_biologicosService.deleteById(id);
        response.put("mensaje","Los datos biológicos se han eliminado correctamente");
        return ResponseEntity.ok(response);
    }






}
