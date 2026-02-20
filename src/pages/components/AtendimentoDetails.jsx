import { Link } from "react-router-dom";

function AtendimentoDetails({ atendimento }) {
    if (!atendimento) {
        return <p>Por favor, clique em um Atendimento...</p>;
    }

    return (
        <div className="p-4 bg-white rounded shadow">
            <h4 className="font-bold text-xl mb-2">Atendimento</h4>
            <div className="mb-2">
                <strong>NomeFalecido: </strong>{atendimento.nomeFalecido}
            </div>
            <div className="mb-2">
                <strong>Descrição: </strong>{atendimento.descricao}
            </div>
            <div className="mb-2">
                <strong>Status: </strong>{atendimento.status}
            </div>
            <Link
                to={`/atendimentos/${atendimento.id}`}
                className="inline-block bg-yellow-400 text-black px-3 py-1 rounded"
            >
                Editar
            </Link>
        </div>
    );
}

export default AtendimentoDetails;
