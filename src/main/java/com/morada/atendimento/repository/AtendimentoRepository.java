package com.morada.atendimento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.morada.atendimento.domain.models.Atendimento;

public interface AtendimentoRepository extends JpaRepository<Atendimento, Long> {

    List<Atendimento> findByNomeFalecidoContainingIgnoreCase(String nome);
}
