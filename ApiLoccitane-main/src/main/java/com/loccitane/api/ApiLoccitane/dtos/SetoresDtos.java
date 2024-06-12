package com.loccitane.api.ApiLoccitane.dtos;

import jakarta.validation.constraints.NotNull;

public record SetoresDtos(
        @NotNull String codigo,
        @NotNull String status
) {
}
