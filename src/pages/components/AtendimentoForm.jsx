import React from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormSelect from "./FormSelect";

function AtendimentoForm({ atendimento, setAtendimento }) {
    const handleChange = (field, value) => {
        setAtendimento({ ...atendimento, [field]: value });
    };

    return (
        <>
            <FormInput
                label="Nome do Falecido"
                value={atendimento.nomeFalecido}
                onChange={(value) => handleChange("nomeFalecido", value)}
            />

            <FormInput
                label="Data de Falecimento"
                type="date"
                value={atendimento.dataFalecimento || ""}
                onChange={(value) => handleChange("dataFalecimento", value)}
            />

            <FormInput
                label="Telefone de Contato"
                value={atendimento.telefoneContato}
                onChange={(value) => handleChange("telefoneContato", value)}
            />

            <FormTextarea
                label="Descrição"
                value={atendimento.descricao}
                onChange={(value) => handleChange("descricao", value)}
            />

            <FormSelect
                label="Status"
                value={atendimento.status || ""}
                onChange={(value) => handleChange("status", value)}
                options={[
                    { value: "", label: "Selecione o status" },
                    { value: "ABERTO", label: "Aberto" },
                    { value: "CONCLUIDO", label: "Concluído" },
                ]}
            />
        </>
    );
}

export default AtendimentoForm;
