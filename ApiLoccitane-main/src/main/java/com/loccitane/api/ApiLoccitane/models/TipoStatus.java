package com.loccitane.api.ApiLoccitane.models;

public enum TipoStatus {
    PARA_USO("para_uso"),
    CHEIO("cheio"),
    BLOQUEADO("bloqueado"),
    INUTILIZAVEL("inutilizavel");

    private String tipo;


    TipoStatus(String tipoRecebido){
        this.tipo = tipoRecebido;
    }

}
