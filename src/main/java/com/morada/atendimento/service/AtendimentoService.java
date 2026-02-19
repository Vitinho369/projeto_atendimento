package com.morada.atendimento.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.morada.atendimento.domain.exceptions.NaoEcontradoException;
import com.morada.atendimento.domain.models.Atendimento;
import com.morada.atendimento.repository.AtendimentoRepository;

@Service
public class AtendimentoService {

    AtendimentoRepository repository;

    public AtendimentoService(AtendimentoRepository repository) {
        this.repository = repository;
    }

    public Atendimento salvar(Atendimento atendimento) {
        return this.repository.save(atendimento);
    }

    public Atendimento buscarPorId(Long id) {
        return this.repository.findById(id).orElseThrow(() -> new NaoEcontradoException("Atendimento não encontrado"));
    }

    public Atendimento atualizar(Atendimento atendimento) {
        this.buscarPorId(atendimento.getId());
        return this.repository.saveAndFlush(atendimento);
    }

    public void deletar(Long id) {
        Atendimento atendimentoExistente = this.buscarPorId(id);
        this.repository.delete(atendimentoExistente);
    }

    public List<Atendimento> listarTodos(String nome) {
        if (nome != null && !nome.isEmpty()) {
            return this.repository.findByNomeFalecidoContainingIgnoreCase(nome);
        }
        return this.repository.findAll();
    }
}
