package com.loccitane.api.ApiLoccitane.repositories;

import com.loccitane.api.ApiLoccitane.models.CorredoresModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface CorredoresRepository extends JpaRepository<CorredoresModel, UUID> {

    CorredoresModel findByCodigo(String codigo);
}
