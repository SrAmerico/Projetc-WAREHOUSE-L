package com.loccitane.api.ApiLoccitane.repositories;

import com.loccitane.api.ApiLoccitane.models.SetoresModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface SetoresRepository extends JpaRepository<SetoresModel, UUID>{
    SetoresModel findByCodigo(String codigo);
}
