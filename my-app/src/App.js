import React, { useEffect, useState } from "react";
import Adicionar from "./components/Adicionar";
import Header from "./components/Header";
import "./App.css";
import classes from "./components/Listagem.module.css";
import { server } from "./lib/axios";
import EditarDeletar from "./components/EditarDeletar";
import Confirmado from "./components/Confirmado";

function pegarSegundaFeiraDaSemana() {
  const data = new Date();

  const dia = data.getDay() || 7;

  if (dia !== 1) {
    data.setHours(-24 * (dia - 1));
  }
  return data;
}

function App() {
  const [tarefas, setTarefas] = useState([]);

  // Pegar os dados quando iniciar a aplicação!!!

  useEffect(() => {
    server.get("/designacao").then(async (res) => {
      const designacoes = await res.data;
      setTarefas(...tarefas, designacoes);
    });
    console.log("i am inside this block");
  }, []);

  return (
    <>
      <Header pegarSegundaFeiraDaSemana={pegarSegundaFeiraDaSemana} />
      <Confirmado pegarSegundaFeiraDaSemana={pegarSegundaFeiraDaSemana} />
      <Adicionar setTarefas={setTarefas} tarefas={tarefas} />
      {tarefas.map((tarefa) => {
        return (
          <div className={classes.borda} key={tarefa._id}>
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
