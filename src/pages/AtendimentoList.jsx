import { useState, useEffect } from "react";
import AtendimentoService from "../services/atendimentoService";
import BarraPesquisa from "./components/BarraPesquisa";
import TabelaAtendimento from "./components/TabelaAtendimento";
import AtendimentoDetails from "./components/AtendimentoDetails";

function AtendimentoList() {
    const [atendimentos, setAtendimentos] = useState([]);
    const [currentAtendimento, setCurrentAtendimento] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchNome, setSearchNome] = useState("");

    useEffect(() => {
        carregaAtendimentos();
    }, []);

    const carregaAtendimentos = () => {
        AtendimentoService.getAll()
            .then((res) => setAtendimentos(res.data))
            .catch((e) => console.log(e));
    };

    const onChangeSearchNome = (e) => setSearchNome(e.target.value);

    const findByNome = () => {
        AtendimentoService.findByNome(searchNome)
            .then((res) => {
                setAtendimentos(res.data);
                setCurrentAtendimento(null);
                setCurrentIndex(-1);
            })
            .catch((e) => console.log(e));
    };

    const setActiveAtendimento = (atendimento, index) => {
        setCurrentAtendimento(atendimento);
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
                <BarraPesquisa
                    searchNome={searchNome}
                    onChange={onChangeSearchNome}
                    onSearch={findByNome}
                />
                <h4 className="font-bold text-lg mb-2">Lista de Atendimentos</h4>
                <TabelaAtendimento
                    atendimentos={atendimentos}
                    currentIndex={currentIndex}
                    onRowClick={setActiveAtendimento}
                />
            </div>

            <div className="flex-1">
                <AtendimentoDetails atendimento={currentAtendimento} />
            </div>
        </div>
    );
}

export default AtendimentoList;
