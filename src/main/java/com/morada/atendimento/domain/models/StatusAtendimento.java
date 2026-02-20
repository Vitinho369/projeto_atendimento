package com.morada.atendimento.domain.models;

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
