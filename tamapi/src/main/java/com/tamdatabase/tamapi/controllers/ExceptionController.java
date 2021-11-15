package com.tamdatabase.tamapi.controllers;

import com.tamdatabase.tamapi.exceptions.CustomException;
import com.tamdatabase.tamapi.exceptions.Mensaje;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionController {
    
    @ExceptionHandler(CustomException.class)
    public Mensaje ErrorException(CustomException exception){
        return new Mensaje("CustomException",exception.getMessage());
    }
}
