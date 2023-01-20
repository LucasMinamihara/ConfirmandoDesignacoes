import React, { useState } from "react";
import Adicionar from "./components/adicionar";
import Header from "./components/Header";
import "./App.css";
// import Tarefas from "./components/Tarefas";
import classes from "./Listagem.module.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  return (
    <>
      <Header></Header>
      <Adicionar tarefas={tarefas} setTarefas={setTarefas}></Adicionar>
      {tarefas.map((cadaObjeto) => {
        return (
          <div className={classes.borda} key={cadaObjeto.id}>
            <div className={classes.principal}>
              Designação: {cadaObjeto.tipo}
            </div>
            <div className={classes.nomes}>
              Principal: {cadaObjeto.nomePrincipal}
            </div>
            <div className={classes.nomes}>
              Ajudante: {cadaObjeto.nomeAjudante}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
