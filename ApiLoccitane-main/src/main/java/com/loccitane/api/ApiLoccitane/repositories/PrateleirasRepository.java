package com.loccitane.api.ApiLoccitane.repositories;

import com.loccitane.api.ApiLoccitane.models.PrateleirasModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PrateleirasRepository extends JpaRepository<PrateleirasModel, UUID> {

    PrateleirasModel findByCodigo(String text);

}
