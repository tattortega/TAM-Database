package com.tamdatabase.tamapi.utils;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;

@Component
public class Autorizacion implements Filter {
    public static final String key = "abcdef";

    public void doFilter(ServletRequest request, ServletResponse response,FilterChain chain)  throws IOException, ServletException{
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        String url = httpServletRequest.getRequestURI();
        System.out.println(url);
        if(url.contains("/api/usuarios/login")){
            System.out.println("Estoy accediendo a la ruta de usuarios");
            chain.doFilter(request, response);
        }else{
            String token = httpServletRequest.getHeader("token");
            System.out.println(token);

            if(token == null || token.trim().equals("")){
                response.setContentType("application/json");
                String body = "{\"Autorizacion\":\" No tienes autorizacion\"}";
                response.getWriter().write(body);
            }
            try{
                Jwts.parser().setSigningKey(key).parseClaimsJws(token);
                chain.doFilter(request, response);
            }
            catch(MalformedJwtException e){
                response.setContentType("application/json");
                String body = "{\"Autorizacion\":\" Token invalido\"}";
                response.getWriter().write(body);
            }
            catch(SignatureException e){
                response.setContentType("application/json");
                String body = "{\"Autorizacion\":\" La key es incorrecta\"}";
                response.getWriter().write(body);
            }
            catch(ExpiredJwtException e){
                response.setContentType("application/json");
                String body = "{\"Autorizacion\":\" El token ha expirado\"}";
                response.getWriter().write(body);
            }
            catch(Exception e){
                response.setContentType("application/json");
                String body = "{\"Autorizacion\":\" No tienes autorizacion\"}";
                response.getWriter().write(body);
            }
        }
    }
}