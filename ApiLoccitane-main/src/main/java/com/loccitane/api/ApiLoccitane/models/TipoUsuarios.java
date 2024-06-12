package com.loccitane.api.ApiLoccitane.models;

public enum TipoUsuarios {
    ADMIN("admin"),
    USUARIO_PREMIUM("premium"),
    USUARIO_COMUM("comum");


    private String tipo;


    TipoUsuarios(String tipoRecebido){
        this.tipo = tipoRecebido;
    }


    public String getRole(){
        return tipo;
    }


}

