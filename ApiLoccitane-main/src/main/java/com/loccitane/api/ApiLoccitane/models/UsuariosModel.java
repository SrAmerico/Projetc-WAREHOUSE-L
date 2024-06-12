package com.loccitane.api.ApiLoccitane.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "tb_usuarios")
public class UsuariosModel implements Serializable, UserDetails {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_usuario")
    private UUID id_usuario;

    private String nome;
    private String sobrenome;
    private String email;
    @JsonIgnore
    private String senha;
    private String telefone;

    private TipoUsuarios tipo_usuario;
    private LocalDate registro;

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.tipo_usuario == TipoUsuarios.ADMIN){
            return List.of(
                    new SimpleGrantedAuthority("ROLE_ADMIN"),
                    new SimpleGrantedAuthority("USUARIO_PREMIUM"),
                    new SimpleGrantedAuthority("ROLE_USUARIO_COMUM")
            );
        } else if (this.tipo_usuario == TipoUsuarios.USUARIO_PREMIUM) {
            return List.of(
                    new SimpleGrantedAuthority("ROLE_USUARIO_PREMIUM")
            );
        } else if (this.tipo_usuario == TipoUsuarios.USUARIO_COMUM) {
            return List.of(
                    new SimpleGrantedAuthority("ROLE_USUARIO_COMUM")
            );
        }
        return null;
    }


    @JsonIgnore
    @Override
    public String getPassword() {
        return senha;
    }

    @JsonIgnore
    @Override
    public String getUsername() {
        return email;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isEnabled() {
        return true;
    }
}



