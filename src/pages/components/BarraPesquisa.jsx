function BarraPesquisa({ searchNome, onChange, onSearch }) {
    return (
        <div className="flex mb-4">
            <input
                type="text"
                className="border border-gray-300 rounded-l px-2 py-1 w-full"
                placeholder="Pesquisar por Nome do Falecido"
                value={searchNome}
                onChange={onChange}
            />
            <button
                className="bg-blue-500 text-white px-4 py-1 rounded-r"
                onClick={onSearch}
            >
                Pesquisar
            </button>
        </div>
    );
}

export default BarraPesquisa;
