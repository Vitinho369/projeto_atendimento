import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AtendimentoService from "../services/atendimentoService";
import AtendimentoForm from "./components/AtendimentoForm";

function AddAtendimento() {
    const [atendimento, setAtendimento] = useState({
        nomeFalecido: "",
        dataFalecimento: "",
        telefoneContato: "",
        descricao: "",
        status: "",
    });

    const navigate = useNavigate();

    const salvarAtendimento = () => {
        AtendimentoService.create(atendimento)
            .then((res) => {
                console.log(res.data);
                navigate("/atendimentos");
            })
            .catch((e) => console.log(e));
    };

    return (
        <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
            <h4 className="font-bold text-xl mb-2">Adicionar Atendimento</h4>

            <AtendimentoForm atendimento={atendimento} setAtendimento={setAtendimento} />

            <button
                className="bg-green-500 text-white px-3 py-1 rounded mt-2"
                onClick={salvarAtendimento}
            >
                Enviar
            </button>
        </div>
    );
}

export default AddAtendimento;
