package com.loccitane.api.ApiLoccitane.controllers;

import com.loccitane.api.ApiLoccitane.dtos.PrateleirasDtos;
import com.loccitane.api.ApiLoccitane.models.NiveisModel;
import com.loccitane.api.ApiLoccitane.models.PrateleirasModel;
import com.loccitane.api.ApiLoccitane.models.TipoStatusPrateleira;
import com.loccitane.api.ApiLoccitane.repositories.NiveisRepository;
import com.loccitane.api.ApiLoccitane.repositories.PrateleirasRepository;
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
@RequestMapping(value = "/prateleiras", produces = {"application/json"})
public class PrateleirasController {

    @Autowired
    PrateleirasRepository prateleirasRepository;
    @Autowired
    NiveisRepository niveisRepository;

    @GetMapping
    public ResponseEntity<List<PrateleirasModel>> ListarPrateleiras(){
        return ResponseEntity.status(HttpStatus.OK).body(prateleirasRepository.findAll());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> BuscarPrateleiras(@PathVariable(value = "id") UUID id){
        Optional<PrateleirasModel> buscandoNivel = prateleirasRepository.findById(id);

        if (buscandoNivel.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Prateleira não encontrado");
        }


        return ResponseEntity.status(HttpStatus.OK).body(buscandoNivel.get());
    }

    @PostMapping
    public ResponseEntity<Object> criarPrateleiras(@RequestBody @Valid PrateleirasDtos prateleirasDtos){

        if (prateleirasRepository.findByCodigo(prateleirasDtos.codigo()) != null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Prateleira já cadastrado");
        }

        PrateleirasModel novaPrateleira = new PrateleirasModel();
        BeanUtils.copyProperties(prateleirasDtos, novaPrateleira);

        Optional<NiveisModel> niveisOptional = niveisRepository.findById(UUID.fromString(prateleirasDtos.id_nivel()));
        if (niveisOptional.isPresent()){
            NiveisModel nivel = niveisOptional.get();
            novaPrateleira.setId_nivel(nivel);
        }
        novaPrateleira.setRegistro(LocalDate.now());
        novaPrateleira.setStatus_prateleira(TipoStatusPrateleira.VAZIO);

        return ResponseEntity.status(HttpStatus.CREATED).body(prateleirasRepository.save(novaPrateleira));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> editarPrateleiras(@PathVariable(value = "id") UUID id, @RequestBody @Valid PrateleirasDtos prateleirasDtos){
        Optional<PrateleirasModel> prateleiraBuscado = prateleirasRepository.findById(id);

        if (prateleiraBuscado.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Prateleira não encontrado");
        }

        PrateleirasModel nivelEditado = prateleiraBuscado.get();
        BeanUtils.copyProperties(prateleirasDtos, nivelEditado );


        return ResponseEntity.status(HttpStatus.CREATED).body(prateleirasRepository.save(nivelEditado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarPrateleiras(@PathVariable(value = "id") UUID id){

        Optional<PrateleirasModel> prateleiraBuscado = prateleirasRepository.findById(id);

        if (prateleiraBuscado.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Prateleira não encontrado");
        }

        prateleirasRepository.delete(prateleiraBuscado.get());
        return ResponseEntity.status(HttpStatus.OK).body("Prateleira deletado com sucesso!");

    }

}
