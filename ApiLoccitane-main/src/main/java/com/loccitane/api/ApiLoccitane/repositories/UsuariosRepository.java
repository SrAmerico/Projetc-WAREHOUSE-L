package com.loccitane.api.ApiLoccitane.repositories;

import com.loccitane.api.ApiLoccitane.models.UsuariosModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UsuariosRepository extends JpaRepository<UsuariosModel, UUID> {
    UserDetails findByEmail(String email);
}
