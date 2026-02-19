import { useState, useEffect } from "react";
import AtendimentoService from "../services/atendimentoService";
import { Link } from "react-router-dom";

function AtendimentoList() {
    const [Atendimentos, setAtendimentos] = useState([]);
    const [currentAtendimento, setCurrentAtendimento] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchNome, setsearchNome] = useState("");

    useEffect(() => {
        retrieveAtendimentos();
    }, []);

    const onChangesearchNome = (e) => {
        setsearchNome(e.target.value);
    };

    const retrieveAtendimentos = () => {
        AtendimentoService.getAll()
            .then((response) => {
                setAtendimentos(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveAtendimentos();
        setCurrentAtendimento(null);
        setCurrentIndex(-1);
    };

    const setActiveAtendimento = (Atendimento, index) => {
        setCurrentAtendimento(Atendimento);
        setCurrentIndex(index);
    };

    const removeAllAtendimentos = () => {
        AtendimentoService.removeAll()
            .then((response) => {
                console.log(response.data);
                refreshList();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const findByNome = () => {
        AtendimentoService.findByNome(searchNome)
            .then((response) => {
                setAtendimentos(response.data);
                setCurrentAtendimento(null);
                setCurrentIndex(-1);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* COLUNA ESQUERDA: PESQUISA + LISTA */}
            <div className="flex-1">
                <div className="flex mb-4">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-l px-2 py-1 w-full"
                        placeholder="Pesquisar por Nome do Falecido"
                        value={searchNome}
                        onChange={onChangesearchNome}
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-1 rounded-r"
                        onClick={findByNome}
                    >
                        Pesquisar
                    </button>
                </div>
                <h4 className="font-bold text-lg mb-2">Lista de Atendimentos</h4>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left border-b">Nome Falecido</th>
                                <th className="px-4 py-2 text-left border-b">Data do Falecimento</th>
                                <th className="px-4 py-2 text-left border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Atendimentos &&
                                Atendimentos.map((Atendimento, index) => (
                                    <tr
                                        key={index}
                                        onClick={() => setActiveAtendimento(Atendimento, index)}
                                        className={
                                            "cursor-pointer hover:bg-blue-50 " +
                                            (index === currentIndex ? "bg-blue-100" : "")
                                        }
                                    >
                                        <td className="px-4 py-2 border-b">
                                            {Atendimento.nomeFalecido}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {Atendimento.dataFalecimento}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {Atendimento.status}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* COLUNA DIREITA: DETALHES */}
            <div className="flex-1">
                {currentAtendimento ? (
                    <div className="p-4 bg-white rounded shadow">
                        <h4 className="font-bold text-xl mb-2">Atendimento</h4>
                        <div className="mb-2">
                            <strong>NomeFalecido: </strong>
                            {currentAtendimento.nomeFalecido}
                        </div>
                        <div className="mb-2">
                            <strong>Descrição: </strong>
                            {currentAtendimento.descricao}
                        </div>
                        <div className="mb-2">
                            <strong>Status: </strong>
                            {currentAtendimento.status}
                        </div>

                        <Link
                            to={`/atendimentos/${currentAtendimento.id}`}
                            className="inline-block bg-yellow-400 text-black px-3 py-1 rounded"
                        >
                            Editar
                        </Link>
                    </div>
                ) : (
                    <div>
                        <p>Por favor, clique em um Atendimento...</p>
                    </div>
                )}
            </div>
        </div >
    );
}

export default AtendimentoList;