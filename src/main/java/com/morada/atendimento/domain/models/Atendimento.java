package com.morada.atendimento.domain.models;

import java.time.LocalDate;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@SQLDelete(sql = "UPDATE atendimento SET data_exclusao = CURRENT_DATE WHERE id = ?")
@SQLRestriction("data_exclusao IS NULL")
@Table(name = "atendimento")
public class Atendimento extends Auditoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String nomeFalecido;

    LocalDate dataFalecimento;

    String telefoneContato;

    String descricao;

    StatusAtendimento status;
}
