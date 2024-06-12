package com.loccitane.api.ApiLoccitane.controllers;

import com.loccitane.api.ApiLoccitane.dtos.CorredoresDtos;
import com.loccitane.api.ApiLoccitane.models.CorredoresModel;
import com.loccitane.api.ApiLoccitane.models.SetoresModel;
import com.loccitane.api.ApiLoccitane.models.TipoStatus;
import com.loccitane.api.ApiLoccitane.repositories.CorredoresRepository;
import com.loccitane.api.ApiLoccitane.repositories.SetoresRepository;
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
@RequestMapping(value = "/corredores", produces = {"application/json"})
public class CorredoresController {

    @Autowired
    CorredoresRepository corredoresRepository;
    @Autowired
    SetoresRepository setoresRepository;


    @GetMapping
    public ResponseEntity<List<CorredoresModel>> ListarCorredores(){
        return ResponseEntity.status(HttpStatus.OK).body(corredoresRepository.findAll());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> BuscarCorredores(@PathVariable(value = "id") UUID id){
        Optional<CorredoresModel> buscandoCorredor = corredoresRepository.findById(id);

        if (buscandoCorredor.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Corredor não encontrado");
        }


        return ResponseEntity.status(HttpStatus.OK).body(buscandoCorredor.get());
    }

    @PostMapping
    public ResponseEntity<Object> criarCorredor(@RequestBody @Valid CorredoresDtos corredoresNivelDtos){

        if (corredoresRepository.findByCodigo(corredoresNivelDtos.codigo()) != null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Corredor já cadastrado");
        }



        CorredoresModel novoCorredores = new CorredoresModel();
        BeanUtils.copyProperties(corredoresNivelDtos, novoCorredores);


        UUID setorUUID = UUID.fromString(corredoresNivelDtos.id_setor());

        Optional<SetoresModel> setorOptional = setoresRepository.findById(setorUUID);
        if (setorOptional.isPresent()) {

            SetoresModel setor = setorOptional.get();
            novoCorredores.setId_setor(setor);

        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("id setor está vazio");
        }


        novoCorredores.setCodigo(corredoresNivelDtos.codigo().toLowerCase());
        novoCorredores.setRegistro(LocalDate.now());
        novoCorredores.setStatus(TipoStatus.PARA_USO);

        return ResponseEntity.status(HttpStatus.CREATED).body(corredoresRepository.save(novoCorredores));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> editarCorredor(@PathVariable(value = "id") UUID id, @RequestBody @Valid CorredoresDtos corredoresNivelDtos){
        Optional<CorredoresModel> corredorBuscado = corredoresRepository.findById(id);

        if (corredorBuscado.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Corredor não encontrado");
        }

        CorredoresModel corredoresEditado = corredorBuscado.get();
        BeanUtils.copyProperties(corredoresNivelDtos, corredoresEditado );



        return ResponseEntity.status(HttpStatus.CREATED).body(corredoresRepository.save(corredoresEditado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarCorredor(@PathVariable(value = "id") UUID id){

        Optional<CorredoresModel> corredorBuscado = corredoresRepository.findById(id);

        if (corredorBuscado.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Corredor não encontrado");
        }

        corredoresRepository.delete(corredorBuscado.get());
        return ResponseEntity.status(HttpStatus.OK).body("Corredor deletado com sucesso!");

    }

}
