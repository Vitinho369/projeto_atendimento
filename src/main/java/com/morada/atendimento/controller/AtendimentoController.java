package com.morada.atendimento.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.morada.atendimento.domain.exceptions.NaoEcontradoException;
import com.morada.atendimento.domain.models.Atendimento;
import com.morada.atendimento.dto.AtendimentoDTO;
import com.morada.atendimento.service.AtendimentoService;

@RestController
@CrossOrigin(origins = "${HOST_URL}")
@RequestMapping("/atendimentos")
public class AtendimentoController {

    private final AtendimentoService service;

    private final ModelMapper modelMapper;

    public AtendimentoController(AtendimentoService service, ModelMapper modelMapper) {
        this.service = service;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public List<AtendimentoDTO> listar(@RequestParam(value = "nome", required = false) String nome) {
        List<Atendimento> atendimentosPage = service.listarTodos(nome);
        return atendimentosPage.stream().map(this::convertToDto).toList();
    }

    @GetMapping("{id}")
    public ResponseEntity<AtendimentoDTO> buscarPorId(@PathVariable("id") Long id) throws Exception {
        Atendimento atendimento = service.buscarPorId(id);
        return ResponseEntity.ok().body(convertToDto(atendimento));
    }

    @PostMapping
    public ResponseEntity<AtendimentoDTO> salvar(@RequestBody AtendimentoDTO atendimentoDTO) {
        Atendimento atendimento = service.salvar(convertToEntity(atendimentoDTO));
        return ResponseEntity.ok().body(convertToDto(atendimento));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Long id) {
        service.deletar(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<AtendimentoDTO> update(@RequestBody AtendimentoDTO atendimentoDTO,
            @PathVariable("id") Long id) {

        System.out.println("ID recebido: " + atendimentoDTO.getId());
        try {
            service.buscarPorId(id);
        } catch (NaoEcontradoException e) {
            System.out.println("Atendimento com ID " + id + " não encontrado. Criando novo atendimento.");
            return this.salvar(atendimentoDTO);
        }

        Atendimento atualizado = convertToEntity(atendimentoDTO);
        System.out.println("atendimento: " + atualizado.toString());
        atualizado.setId(id);
        return ResponseEntity.ok().body(convertToDto(service.atualizar(atualizado)));
    }

    private AtendimentoDTO convertToDto(Atendimento atendimento) {
        AtendimentoDTO atendimentoDTO = modelMapper.map(atendimento, AtendimentoDTO.class);
        return atendimentoDTO;
    }

    private Atendimento convertToEntity(AtendimentoDTO atendimentoDTO) {
        Atendimento entityAtendimento = modelMapper.map(atendimentoDTO, Atendimento.class);
        return entityAtendimento;
    }
}
