package com.morada.atendimento.dto;

import java.time.LocalDate;

import com.morada.atendimento.domain.models.StatusAtendimento;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AtendimentoDTO {

    Long id;

    @NotBlank(message = "O nome do falecido é obrigatório")
    String nomeFalecido;

    @NotNull(message = "A data de falecimento é obrigatória")
    LocalDate dataFalecimento;

    @NotBlank(message = "O telefone do solicitante é obrigatório")
    String telefoneContato;

    @Max(value = 1000, message = "A descrição deve conter no máximo 1000 caracteres")
    String descricao;

    @NotNull(message = "O status do atendimento é obrigatório")
    StatusAtendimento status;
}
