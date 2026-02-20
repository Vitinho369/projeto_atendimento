import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AtendimentoService from "../services/atendimentoService";
import AtendimentoForm from "./components/AtendimentoForm";

function Atendimento() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentAtendimento, setCurrentAtendimento] = useState({
        id: null,
        nomeFalecido: "",
        dataFalecimento: "",
        telefoneContato: "",
        descricao: "",
        status: "",
    });
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (id) {
            AtendimentoService.get(id)
                .then((res) => setCurrentAtendimento(res.data))
                .catch((e) => console.log(e));
        }
    }, [id]);

    const atualizaAtendimento = () => {
        AtendimentoService.update(currentAtendimento.id, currentAtendimento)
            .then((res) => setMessage("O atendimento foi atualizado com sucesso!"))
            .catch((e) => console.log(e));
    };

    const deleteAtendimento = () => {
        AtendimentoService.remove(currentAtendimento.id)
            .then(() => navigate("/atendimentos"))
            .catch((e) => console.log(e));
    };

    return (
        <div>
            {currentAtendimento.id !== null ? (
                <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
                    <h4 className="font-bold text-xl mb-2">Editar Atendimento</h4>

                    <AtendimentoForm
                        atendimento={currentAtendimento}
                        setAtendimento={setCurrentAtendimento}
                    />

                    <div className="space-x-2 mt-2">
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded"
                            onClick={deleteAtendimento}
                        >
                            Excluir
                        </button>
                        <button
                            className="bg-green-500 text-white px-3 py-1 rounded"
                            onClick={atualizaAtendimento}
                        >
                            Atualizar
                        </button>
                    </div>

                    {message && <p className="text-green-600 mt-2">{message}</p>}
                </div>
            ) : (
                <p>Carregando Atendimento...</p>
            )}
        </div>
    );
}

export default Atendimento;
