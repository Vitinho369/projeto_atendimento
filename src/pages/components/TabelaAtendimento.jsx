function TabelaAtendimento({ atendimentos, currentIndex, onRowClick }) {
    return (
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
                    {atendimentos.map((atendimento, index) => (
                        <tr
                            key={index}
                            onClick={() => onRowClick(atendimento, index)}
                            className={
                                "cursor-pointer hover:bg-blue-50 " +
                                (index === currentIndex ? "bg-blue-100" : "")
                            }
                        >
                            <td className="px-4 py-2 border-b">{atendimento.nomeFalecido}</td>
                            <td className="px-4 py-2 border-b">{atendimento.dataFalecimento}</td>
                            <td className="px-4 py-2 border-b">{atendimento.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaAtendimento;
