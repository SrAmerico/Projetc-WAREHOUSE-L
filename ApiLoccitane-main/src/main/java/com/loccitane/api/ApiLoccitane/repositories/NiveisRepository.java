package com.loccitane.api.ApiLoccitane.repositories;

import com.loccitane.api.ApiLoccitane.models.CorredoresModel;
import com.loccitane.api.ApiLoccitane.models.NiveisModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface NiveisRepository extends JpaRepository<NiveisModel, UUID> {

    NiveisModel findByCodigo(String codigo);

}
