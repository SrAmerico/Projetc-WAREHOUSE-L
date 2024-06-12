package com.loccitane.api.ApiLoccitane.controllers;

import com.loccitane.api.ApiLoccitane.dtos.UsuariosDtos;
import com.loccitane.api.ApiLoccitane.models.TipoUsuarios;
import com.loccitane.api.ApiLoccitane.models.UsuariosModel;
import com.loccitane.api.ApiLoccitane.repositories.UsuariosRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/usuarios", produces = {"application/json"})
public class UsuariosController {

    @Autowired
    UsuariosRepository usuariosRepository;

    @GetMapping
    public ResponseEntity<List<UsuariosModel>> ListarUsuarios(){
        return ResponseEntity.status(HttpStatus.OK).body(usuariosRepository.findAll());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> BuscarUsuarios(@PathVariable(value = "id") UUID id){
        Optional<UsuariosModel> buscandoUsuarios = usuariosRepository.findById(id);

        if (buscandoUsuarios.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
        }


        return ResponseEntity.status(HttpStatus.OK).body(buscandoUsuarios.get());
    }

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Object> criarUsuarios(@ModelAttribute @Valid UsuariosDtos usuariosDtos){

        if (usuariosRepository.findByEmail(usuariosDtos.email()) != null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuario já cadastrado");
        }


        UsuariosModel novoUsuario = new UsuariosModel();
        BeanUtils.copyProperties(usuariosDtos, novoUsuario);

        novoUsuario.setRegistro(LocalDate.now());


        String senhaCript = new BCryptPasswordEncoder().encode(usuariosDtos.senha());
        novoUsuario.setSenha(senhaCript);

        return ResponseEntity.status(HttpStatus.CREATED).body(usuariosRepository.save(novoUsuario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> editarUsuarios(@PathVariable(value = "id") UUID id, @RequestBody @Valid UsuariosDtos usuariosDtos){
        Optional<UsuariosModel> usuarioBuscado = usuariosRepository.findById(id);

        if (usuarioBuscado.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
        }

        UsuariosModel usuarioEditado = usuarioBuscado.get();
        BeanUtils.copyProperties(usuarioBuscado, usuarioEditado );

        usuarioEditado.setRegistro(LocalDate.now());



        String senhaCript = new BCryptPasswordEncoder().encode(usuariosDtos.senha());
        usuarioEditado.setSenha(senhaCript);

        return ResponseEntity.status(HttpStatus.CREATED).body(usuariosRepository.save(usuarioEditado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarUsuarios(@PathVariable(value = "id") UUID id){

        Optional<UsuariosModel> usuarioBuscado = usuariosRepository.findById(id);

        if (usuarioBuscado.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
        }

        usuariosRepository.delete(usuarioBuscado.get());
        return ResponseEntity.status(HttpStatus.OK).body("Usuario deletado com sucesso!");

    }
}
