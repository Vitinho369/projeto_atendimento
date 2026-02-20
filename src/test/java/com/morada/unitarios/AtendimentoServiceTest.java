package com.morada.unitarios;

import com.morada.atendimento.domain.exceptions.NaoEcontradoException;
import com.morada.atendimento.domain.models.Atendimento;
import com.morada.atendimento.repository.AtendimentoRepository;
import com.morada.atendimento.service.AtendimentoService;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AtendimentoServiceTest {

    @Mock
    private AtendimentoRepository repository;

    @InjectMocks
    private AtendimentoService service;

    @Test
    void testeSalvar_Sucesso() {
        Atendimento atendimento = new Atendimento();
        atendimento.setNomeFalecido("Maria");

        Atendimento saved = new Atendimento();
        saved.setId(1L);
        saved.setNomeFalecido("Maria");

        when(repository.save(atendimento)).thenReturn(saved);

        Atendimento resultado = service.salvar(atendimento);

        assertEquals(1L, resultado.getId());
        assertEquals("Maria", resultado.getNomeFalecido());
        verify(repository, times(1)).save(atendimento);
    }

    @Test
    void testeBuscarPorId_Sucesso() {
        Atendimento atendimento = new Atendimento();
        atendimento.setId(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(atendimento));

        Atendimento resultado = service.buscarPorId(1L);

        assertEquals(1L, resultado.getId());
        verify(repository, times(1)).findById(1L);
    }

    @Test
    void testeBuscarPorId_NaoEncontrado() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        NaoEcontradoException exception = assertThrows(NaoEcontradoException.class, () -> {
            service.buscarPorId(1L);
        });

        assertEquals("Atendimento não encontrado", exception.getMessage());
    }

    @Test
    void testeAtualizar() {
        Atendimento existente = new Atendimento();
        existente.setId(1L);
        existente.setNomeFalecido("Antigo");

        Atendimento atualizado = new Atendimento();
        atualizado.setId(1L);
        atualizado.setNomeFalecido("Novo");

        when(repository.findById(1L)).thenReturn(Optional.of(existente));
        when(repository.saveAndFlush(atualizado)).thenReturn(atualizado);

        Atendimento resultado = service.atualizar(atualizado);

        assertEquals("Novo", resultado.getNomeFalecido());
        verify(repository).findById(1L);
        verify(repository).saveAndFlush(atualizado);
    }

    @Test
    void testeDeletar() {
        Atendimento atendimento = new Atendimento();
        atendimento.setId(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(atendimento));
        doNothing().when(repository).delete(atendimento);

        assertDoesNotThrow(() -> service.deletar(1L));

        verify(repository).findById(1L);
        verify(repository).delete(atendimento);
    }

    @Test
    void testeListarTodos_SemFiltro() {
        Atendimento a1 = new Atendimento();
        a1.setNomeFalecido("João");
        Atendimento a2 = new Atendimento();
        a2.setNomeFalecido("Maria");

        when(repository.findAll()).thenReturn(List.of(a1, a2));

        List<Atendimento> resultado = service.listarTodos(null);

        assertEquals(2, resultado.size());
        verify(repository).findAll();
    }

    @Test
    void testeListarTodos_ComFiltro() {
        Atendimento a1 = new Atendimento();
        a1.setNomeFalecido("João");

        when(repository.findByNomeFalecidoContainingIgnoreCase("joão")).thenReturn(List.of(a1));

        List<Atendimento> resultado = service.listarTodos("joão");

        assertEquals(1, resultado.size());
        assertEquals("João", resultado.get(0).getNomeFalecido());
        verify(repository).findByNomeFalecidoContainingIgnoreCase("joão");
    }
}
