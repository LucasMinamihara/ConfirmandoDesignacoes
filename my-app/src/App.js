import React, { useEffect, useState } from "react";
import Adicionar from "./components/adicionar";
import Header from "./components/Header";
import "./App.css";
import classes from "./Listagem.module.css";
import { server } from "./components/axios";

function App() {
  const [tarefas, setTarefas] = useState([]);

  // Pegar os dados quando iniciar a aplicação!!!

  useEffect(() => {
    try {
      server.get("/designacao").then((res) => {
        let todosOsDados = res.data;
        todosOsDados.map((dados) => {
          let id = Math.random();
          let { tipo } = dados;
          let { principal } = dados;
          let { ajudante } = dados;
          setTarefas([
            ...tarefas,
            {
              id,
              tipo,
              principal,
              ajudante,
            },
          ]);
        });
        console.log(tarefas);
      });
    } catch (err) {
      console.error(err);
    }
    console.log("i fire once");
  }, []);

  return (
    <>
      <Header></Header>
      <Adicionar tarefas={tarefas} setTarefas={setTarefas}></Adicionar>
      {tarefas.map((cadaObjeto) => {
        console.log("eu já entreei aqui!");
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
