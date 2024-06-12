package com.loccitane.api.ApiLoccitane.controllers;

import com.loccitane.api.ApiLoccitane.dtos.NiveisDtos;
import com.loccitane.api.ApiLoccitane.models.CorredoresModel;
import com.loccitane.api.ApiLoccitane.models.NiveisModel;
import com.loccitane.api.ApiLoccitane.models.TipoStatus;
import com.loccitane.api.ApiLoccitane.repositories.CorredoresRepository;
import com.loccitane.api.ApiLoccitane.repositories.NiveisRepository;
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
@RequestMapping(value = "/niveis", produces = {"application/json"})
public class NiveisController {

    @Autowired
    NiveisRepository niveisRepository;
    @Autowired
    CorredoresRepository corredoresRepository;


    @GetMapping
    public ResponseEntity<List<NiveisModel>> ListarNiveis(){
        return ResponseEntity.status(HttpStatus.OK).body(niveisRepository.findAll());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> BuscarNiveis(@PathVariable(value = "id") UUID id){
        Optional<NiveisModel> buscandoNivel = niveisRepository.findById(id);

        if (buscandoNivel.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nivel não encontrado");
        }


        return ResponseEntity.status(HttpStatus.OK).body(buscandoNivel.get());
    }

    @PostMapping
    public ResponseEntity<Object> criarNiveis(@RequestBody @Valid NiveisDtos niveisDtos){

        if (niveisRepository.findByCodigo(niveisDtos.codigo()) != null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Nivel já cadastrado");
        }

        NiveisModel novoNivel = new NiveisModel();
        BeanUtils.copyProperties(niveisDtos, novoNivel);

        Optional<CorredoresModel> corredoresOptional = corredoresRepository.findById(UUID.fromString(niveisDtos.id_corredor()));
        if (corredoresOptional.isPresent()){
            CorredoresModel corredor = corredoresOptional.get();
            novoNivel.setId_corredor(corredor);
        }

        novoNivel.setRegistro(LocalDate.now());
        novoNivel.setStatus(TipoStatus.PARA_USO);

        return ResponseEntity.status(HttpStatus.CREATED).body(niveisRepository.save(novoNivel));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> editarNiveis(@PathVariable(value = "id") UUID id, @RequestBody @Valid NiveisDtos niveisDtos){
        Optional<NiveisModel> nivelBuscado = niveisRepository.findById(id);

        if (nivelBuscado.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nivel não encontrado");
        }

        NiveisModel nivelEditado = nivelBuscado.get();
        BeanUtils.copyProperties(niveisDtos, nivelEditado );


        return ResponseEntity.status(HttpStatus.CREATED).body(niveisRepository.save(nivelEditado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarNiveis(@PathVariable(value = "id") UUID id){

        Optional<NiveisModel> nivelBuscado = niveisRepository.findById(id);

        if (nivelBuscado.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nivel não encontrado");
        }

        niveisRepository.delete(nivelBuscado.get());
        return ResponseEntity.status(HttpStatus.OK).body("Nivel deletado com sucesso!");

    }

}
