package com.tamdatabase.tamapi.controllers;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tamdatabase.tamapi.exceptions.CustomException;
import com.tamdatabase.tamapi.models.Usuarios;
import com.tamdatabase.tamapi.services.UsuariosService;
import com.tamdatabase.tamapi.utils.Autorizacion;
import com.tamdatabase.tamapi.utils.BCrypt;

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

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

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
        usuarios.setContraseña(BCrypt.hashpw(usuarios.getContraseña(), BCrypt.gensalt()));
        Usuarios u = this._usuariosService.findByUsuario(usuarios.getUsuario());
        Map<String,String> response = new HashMap<>();
        System.out.println(u.getId());
        if(u.getId() == null){
            this._usuariosService.save(usuarios);
            response.put("mensaje","El usuario se ha registrado correctamente");
        }else{
            response.put("mensaje","El usuario ya se encuentra registrado");
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/usuarios/login")
    ResponseEntity<Usuarios> login(@RequestBody Usuarios usuario){
        Usuarios u = this._usuariosService.findByUsuario(usuario.getUsuario());
        if(u.getUsuario() == null){
            throw new CustomException("Usuario o contraseña es incorrecto");
        }
        if(!BCrypt.checkpw(usuario.getContraseña(), u.getContraseña())){
            throw new CustomException("Usuario o contraseña es incorrecto");
        }
        String token = "";
        Long tiempo = System.currentTimeMillis();
        if(u.getId() != ""){
             token =   Jwts.builder()
                    .signWith(SignatureAlgorithm.HS256, Autorizacion.key)
                    .setSubject(u.getNombres())
                    .setIssuedAt(new Date(tiempo))
                    .setExpiration(new Date(tiempo + 900000))
                    .claim("username", u.getUsuario())
                    .claim("correo", u.getCorreo())
                    .claim("rol", u.getRoles_id())
                    .compact();
        }

        u.setToken(token);        
        return ResponseEntity.ok(u);

    }

    @PutMapping("/usuarios")
    ResponseEntity<Map<String,String>> update(@RequestBody Usuarios usuarios){
        usuarios.setContraseña(BCrypt.hashpw(usuarios.getContraseña(), BCrypt.gensalt()));
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