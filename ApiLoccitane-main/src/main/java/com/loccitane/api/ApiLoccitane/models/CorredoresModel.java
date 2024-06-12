package com.loccitane.api.ApiLoccitane.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "tb_corredores")
public class CorredoresModel implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_corredor")
    private UUID id_corredor;

    private String codigo;
    private LocalDate registro;
    private TipoStatus status;

    @ManyToOne
    @JoinColumn(name = "id_setor",referencedColumnName = "id_setor")
    private SetoresModel id_setor;

}
