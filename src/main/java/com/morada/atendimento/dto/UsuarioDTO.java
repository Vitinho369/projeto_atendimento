package com.morada.atendimento.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {

    Long id;

    @NotBlank(message = "O email é obrigatório")
    String email;

    @NotBlank(message = "A senha é obrigatória")
    String senha;
}
