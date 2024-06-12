package com.loccitane.api.ApiLoccitane.controllers;

import com.loccitane.api.ApiLoccitane.dtos.SetoresDtos;
import com.loccitane.api.ApiLoccitane.models.SetoresModel;
import com.loccitane.api.ApiLoccitane.models.TipoStatus;
import com.loccitane.api.ApiLoccitane.repositories.SetoresRepository;
import com.loccitane.api.ApiLoccitane.repositories.UsuariosRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/setores", produces = {"application/json"})
public class SetoresController {

    @Autowired
    SetoresRepository setoresRepository;
    @Autowired
    UsuariosRepository usuariosRepository;

    @GetMapping
    public ResponseEntity<List<SetoresModel>> ListarSetores(){
        return ResponseEntity.status(HttpStatus.OK).body(setoresRepository.findAll());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> BuscarSetores(@PathVariable(value = "id") UUID id){
        Optional<SetoresModel> buscandoSetor = setoresRepository.findById(id);

        if (buscandoSetor.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Setor não encontrado");
        }


        return ResponseEntity.status(HttpStatus.OK).body(buscandoSetor.get());
    }

    @PostMapping
    public ResponseEntity<Object> criarSetores(@RequestBody @Valid SetoresDtos setoresDtos){

        if (setoresRepository.findByCodigo(setoresDtos.codigo()) != null){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Setor já cadastrado");
        }

        if(setoresDtos.codigo().length() != 2){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Não aceito mais ou menos caracteres inferior ou superior a 2");
        }

        SetoresModel novoSetor = new SetoresModel();
        BeanUtils.copyProperties(setoresDtos, novoSetor);

        novoSetor.setRegistro(LocalDate.now());
        return ResponseEntity.status(HttpStatus.CREATED).body(setoresRepository.save(novoSetor));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> editarSetores(@PathVariable(value = "id") UUID id, @RequestBody @Valid SetoresDtos setoresDtos){
        Optional<SetoresModel> setorBuscado = setoresRepository.findById(id);

        if (setorBuscado.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Setor não encontrado");
        }

        SetoresModel setorEditado = setorBuscado.get();
        BeanUtils.copyProperties(setoresDtos, setorEditado );



        return ResponseEntity.status(HttpStatus.CREATED).body(setoresRepository.save(setorEditado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarSetores(@PathVariable(value = "id") UUID id){

        Optional<SetoresModel> setoresBuscado = setoresRepository.findById(id);

        if (setoresBuscado.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Setor não encontrado");
        }

        setoresRepository.delete(setoresBuscado.get());
        return ResponseEntity.status(HttpStatus.OK).body("Setor deletado com sucesso!");

    }
}
