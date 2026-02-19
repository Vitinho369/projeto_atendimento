package com.morada.atendimento.domain.models;

import java.time.LocalDateTime;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
@RequiredArgsConstructor
public abstract class Auditoria {

    @CreationTimestamp
    @Column(updatable = false, name = "criado_em")
    private LocalDateTime criadoEm;

    @Column(name = "data_exclusao")
    private LocalDateTime dataExclusao = null;

    @UpdateTimestamp
    @Column(name = "atualizado_em")
    private LocalDateTime atualizadoEm = null;
}