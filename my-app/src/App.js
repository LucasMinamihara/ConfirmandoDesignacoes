import React, { useEffect, useState } from "react";
import Adicionar from "./components/adicionar";
import Header from "./components/Header";
import "./App.css";
import classes from "./Listagem.module.css";
import { server } from "./lib/axios";
import EditarDeletar from "./components/editarDeletar";

function App() {
  const [tarefas, setTarefas] = useState([]);

  // Pegar os dados quando iniciar a aplicação!!!

  useEffect(() => {
    server.get("/designacao").then(async (res) => {
      const designacoes = await res.data;
      setTarefas(...tarefas, designacoes);
    });
  }, []);

  return (
    <>
      <Header />
      <Adicionar setTarefas={setTarefas} tarefas={tarefas} />
      {tarefas.map((tarefa) => {
        return (
          <div
            className={classes.borda}
            key={tarefa._id ? tarefa._id : Math.random()}
          >
            <div className={classes.principal}>Designação: {tarefa.tipo}</div>
            <div className={classes.nomes}>Principal: {tarefa.principal}</div>
            <div className={classes.nomes}>Ajudante: {tarefa.ajudante}</div>
            <EditarDeletar
              identificador={tarefa._id}
              setTarefas={setTarefas}
              tarefas={tarefas}
            />
          </div>
        );
      })}
    </>
  );
}

export default App;
