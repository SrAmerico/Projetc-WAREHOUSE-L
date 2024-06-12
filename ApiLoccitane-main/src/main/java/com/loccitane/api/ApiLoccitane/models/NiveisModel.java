package com.loccitane.api.ApiLoccitane.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "tb_niveis")
public class NiveisModel implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_nivel")
    private UUID id_nivel;

    private String codigo;
    private LocalDate registro;
    private TipoStatus status;

    @ManyToOne
    @JoinColumn(name = "id_corredor",referencedColumnName = "id_corredor")
    private CorredoresModel id_corredor;

}
