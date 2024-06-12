package com.loccitane.api.ApiLoccitane.dtos;

import jakarta.validation.constraints.NotNull;

public record CorredoresDtos(

        @NotNull String codigo,
        @NotNull String status,
        String id_setor

) {
}
