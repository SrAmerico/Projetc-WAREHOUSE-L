package com.loccitane.api.ApiLoccitane.controllers;

import com.loccitane.api.ApiLoccitane.dtos.LoginDtos;
import com.loccitane.api.ApiLoccitane.dtos.TokenDtos;
import com.loccitane.api.ApiLoccitane.models.UsuariosModel;
import com.loccitane.api.ApiLoccitane.services.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class LoginController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody @Valid LoginDtos dadosLogin){
        var usernamePassword = new UsernamePasswordAuthenticationToken(dadosLogin.email(), dadosLogin.senha());

        var auth = authenticationManager.authenticate(usernamePassword);

        var token = tokenService.gerarToken((UsuariosModel) auth.getPrincipal());

        return ResponseEntity.status(HttpStatus.OK).body(new TokenDtos(token));
    }
}