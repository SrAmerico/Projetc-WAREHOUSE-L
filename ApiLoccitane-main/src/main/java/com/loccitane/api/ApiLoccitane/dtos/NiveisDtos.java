package com.loccitane.api.ApiLoccitane.dtos;

import jakarta.validation.constraints.NotNull;

public record NiveisDtos(

        @NotNull String codigo,
        @NotNull String status,
        String id_corredor

) {
}
