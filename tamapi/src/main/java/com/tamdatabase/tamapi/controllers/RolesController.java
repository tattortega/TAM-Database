package com.tamdatabase.tamapi.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.tamdatabase.tamapi.models.Roles;
import com.tamdatabase.tamapi.services.RolesService;

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
public class RolesController {
    private RolesService _rolesService;

    @Autowired
    public RolesController(RolesService rolesService){
        this._rolesService = rolesService;
    }

    @GetMapping("/roles")
    public List<Roles> findAll()
    {
        return this._rolesService.findAll();
    }

    @GetMapping("/roles/{id}")
    public Optional<Roles> getRol(@PathVariable("id") String id) {
        return this._rolesService.findById(id);
    }

    @PostMapping("/roles")
    ResponseEntity<Map<String,String>> save(@RequestBody Roles roles){
        this._rolesService.save(roles);
        Map<String,String> response = new HashMap<>();
        response.put("mensaje","El rol se ha registrado correctamente");
        return ResponseEntity.ok(response);

    }

    @PutMapping("/roles")
    ResponseEntity<Map<String,String>> update(@RequestBody Roles roles){
        this._rolesService.save(roles);
        Map<String,String> response = new HashMap<>();
        response.put("mensaje","El rol se ha actualizado correctamente");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/roles/{id}")
    ResponseEntity<Map<String,String>> delete(@PathVariable String id){
        Boolean existeRoles = this._rolesService.existById(id);
        Map<String,String> response = new HashMap<>();
        if(!existeRoles){
            response.put("mensaje","El rol no existe en la base datos");
            return ResponseEntity.ok(response);
        }
        this._rolesService.deleteById(id);
        response.put("mensaje","El rol se ha eliminado correctamente");
        return ResponseEntity.ok(response);
    }

}