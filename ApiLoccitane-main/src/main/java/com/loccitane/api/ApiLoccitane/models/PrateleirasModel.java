package com.loccitane.api.ApiLoccitane.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.time.LocalDate;
import java.util.UUID;


@Getter
@Setter
@Entity
@Table(name = "tb_prateleira")
public class PrateleirasModel {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_prateleira")
    private UUID id_prateleira;

    @Column(name = "codigo_produto")
    private String codigo;

    @Column(name = "peso")
    private double peso;


    private LocalDate registro;
    private TipoStatusPrateleira status_prateleira;

    @ManyToOne
    @JoinColumn(name = "id_nivel",referencedColumnName = "id_nivel")
    private NiveisModel id_nivel;

}
