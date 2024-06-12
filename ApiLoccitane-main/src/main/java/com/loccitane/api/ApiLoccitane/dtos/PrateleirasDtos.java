package com.loccitane.api.ApiLoccitane.dtos;

import jakarta.validation.constraints.NotNull;

public record PrateleirasDtos(
        String codigo,
        double peso,
        @NotNull String status,
        String id_nivel

) {
}
