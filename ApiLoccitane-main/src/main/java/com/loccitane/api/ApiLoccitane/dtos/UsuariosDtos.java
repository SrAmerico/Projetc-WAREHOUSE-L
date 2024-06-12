package com.loccitane.api.ApiLoccitane.dtos;


import com.loccitane.api.ApiLoccitane.models.TipoUsuarios;

public record UsuariosDtos(
        String nome,
        String sobrenome,
        String email,
        String senha,
        String telefone,

        TipoUsuarios tipo_usuario
) {
}
