import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [modoEscuro, setModoEscuro] = useState(true);

  // 👉 Carrega tarefas do localStorage ao iniciar
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  // 👉 Salva tarefas no localStorage toda vez que elas mudarem
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  const removerTarefa = (index) => {
    const novas = tarefas.filter((_, i) => i !== index);
    setTarefas(novas);
  };

  return (
    <div className={modoEscuro ? "container dark" : "container light"}>
      <button onClick={() => setModoEscuro(!modoEscuro)} className="toggle-btn">
        {modoEscuro ? "☀️ Claro" : "🌙 Escuro"}
      </button>
      <h1>Minha Lista de Tarefas</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul className="lista">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="fade-in">
            {tarefa}
            <button className="remover" onClick={() => removerTarefa(index)}>
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
