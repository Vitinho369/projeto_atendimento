package com.morada.atendimento.domain.models;

import com.fasterxml.jackson.annotation.JsonValue;

public enum StatusAtendimento {
    ABERTO("ABERTO"),
    CONCLUIDO("CONCLUIDO");

    private final String descricao;

    StatusAtendimento(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}
