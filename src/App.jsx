import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import AtendimentoList from "./pages/AtendimentoList";
import AddAtendimento from "./pages/AddAtendimento";
import Atendimento from "./pages/Atendimento";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-lg font-bold">
              Morada da Paz
            </Link>
            <div className="flex space-x-4">
              <Link
                to="/atendimentos"
                className="hover:text-gray-300 font-bold"
              >
                Atendimentos
              </Link>
              <Link to="/add" className="hover:text-gray-300">
                Adicionar
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<AtendimentoList />} />
            <Route path="/atendimentos" element={<AtendimentoList />} />
            <Route path="/add" element={<AddAtendimento />} />
            <Route path="/atendimentos/:id" element={<Atendimento />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;