import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AtendimentoService from "../services/atendimentoService";

function AddAtendimento() {
    const [nomeFalecido, setNomeFalecido] = useState("");
    const [dataFalecimento, setDataFalecimento] = useState(null);
    const [telefoneContato, setTelefoneContato] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    const saveAtendimento = () => {
        const data = { nomeFalecido, dataFalecimento, telefoneContato, descricao, status };
        AtendimentoService.create(data)
            .then((response) => {
                console.log(response.data);
                navigate("/atendimentos");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const newAtendimento = () => {
        setNomeFalecido("");
        setDataFalecimento(null);
        setTelefoneContato("");
        setDescricao("");
        setStatus("");
    };

    return (
        <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
            <div>
                <h4 className="font-bold text-xl mb-2">Adicionar Atendimento</h4>

                <div className="mb-2">
                    <label className="block mb-1 font-medium">Nome do Falecido</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        value={nomeFalecido}
                        onChange={(e) => setNomeFalecido(e.target.value)}
                    />
                </div>

                <div className="mb-2">
                    <label className="block mb-1 font-medium">Data de Falecimento</label>
                    <input
                        type="date"
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        value={dataFalecimento}
                        onChange={(e) => setDataFalecimento(e.target.value)}
                    />
                </div>

                <div className="mb-2">
                    <label className="block mb-1 font-medium">Telefone de Contato</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        value={telefoneContato}
                        onChange={(e) => setTelefoneContato(e.target.value)}
                    />
                </div>

                <div className="mb-2">
                    <label className="block mb-1 font-medium">Descrição</label>
                    <textarea
                        className="border border-gray-300 rounded w-full px-2 py-1 h-32 resize-none"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>


                <div className="mb-2">
                    <label className="block mb-1 font-medium">Status</label>
                    <select
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">Selecione o status</option>
                        <option value="ABERTO">Aberto</option>
                        <option value="CONCLUIDO">Concluído</option>
                    </select>
                </div>

                <button
                    className="bg-green-500 text-white px-3 py-1 rounded mt-2"
                    onClick={saveAtendimento}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
}

export default AddAtendimento;