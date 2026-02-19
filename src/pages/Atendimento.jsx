import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AtendimentoService from "../services/atendimentoService";

function Atendimento() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentAtendimento, setcurrentAtendimento] = useState({
        id: null,
        nomeFalecido: "",
        dataFalecimento: null,
        telefoneContato: "",
        descricao: "",
        status: ""
    });
    const [message, setMessage] = useState("");

    const getAtendimento = (id) => {
        AtendimentoService.get(id)
            .then((response) => {
                setcurrentAtendimento(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id) getAtendimento(id);
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setcurrentAtendimento({ ...currentAtendimento, [name]: value });
    };

    const updateAtendimento = () => {
        AtendimentoService.update(currentAtendimento.id, currentAtendimento)
            .then((response) => {
                console.log(response.data);
                setMessage("O atendimento foi atualizado com sucesso!");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deleteAtendimento = () => {
        AtendimentoService.remove(currentAtendimento.id)
            .then((response) => {
                console.log(response.data);
                navigate("/atendimentos");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentAtendimento ? (
                <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
                    <h4 className="font-bold text-xl mb-2">Editar Atendimento</h4>

                    <div className="mb-2">
                        <label className="block font-medium" htmlFor="nomeFalecido">
                            Nome do Falecido
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded w-full px-2 py-1"
                            id="nomeFalecido"
                            name="nomeFalecido"
                            value={currentAtendimento.nomeFalecido}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block font-medium" htmlFor="dataFalecimento">
                            Data do Falecimento
                        </label>
                        <input
                            type="date"
                            className="border border-gray-300 rounded w-full px-2 py-1"
                            id="dataFalecimento"
                            name="dataFalecimento"
                            value={currentAtendimento.dataFalecimento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block mb-1 font-medium">Descrição</label>
                        <textarea
                            name="descricao"
                            className="border border-gray-300 rounded w-full px-2 py-1 h-32 resize-none"
                            value={currentAtendimento.descricao}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block font-medium" htmlFor="telefoneContato">
                            Telefone de Contato
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded w-full px-2 py-1"
                            id="telefoneContato"
                            name="telefoneContato"
                            value={currentAtendimento.telefoneContato}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-2">
                        <div className="mb-2">
                            <strong>Status:</strong>{" "}
                            <select
                                name="status"
                                className="border border-gray-300 rounded w-full px-2 py-1"
                                value={currentAtendimento?.status || ""}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecione o status</option>
                                <option value="ABERTO">Aberto</option>
                                <option value="CONCLUIDO">Concluído</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-x-2 mt-2">

                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded"
                            onClick={deleteAtendimento}
                        >
                            Excluir
                        </button>

                        <button
                            className="bg-green-500 text-white px-3 py-1 rounded"
                            onClick={updateAtendimento}
                        >
                            Atualizar
                        </button>

                    </div>

                    {message && <p className="text-green-600 mt-2">{message}</p>}
                </div>
            ) : (
                <div>
                    <p>Carregando tutorial...</p>
                </div>
            )}
        </div>
    );
}

export default Atendimento;