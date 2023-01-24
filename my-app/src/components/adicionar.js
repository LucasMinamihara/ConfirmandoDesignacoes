import { useState } from "react";
import classes from "./adicionar.module.css";
import axios from "axios";

function Adicionar(props) {
  const [designacao, setDesignacao] = useState("");
  const [principal, setPrincipal] = useState("");
  const [ajudante, setAjudante] = useState("");

  async function adicionarParte(e) {
    e.preventDefault();

    props.setTarefas([
      ...props.tarefas,
      {
        id: Math.random() * 100000000000000,
        tipo: designacao,
        nomePrincipal: principal,
        nomeAjudante: ajudante,
      },
    ]);

    await axios.post("http://localhost:5000/designacao", {
      designacao,
      principal,
      ajudante,
    });
  }

  return (
    <form className={classes.posicao} onSubmit={adicionarParte}>
      <input
        placeholder="Tipo de Designação"
        className={classes.entradas}
        onChange={(e) => setDesignacao(e.target.value)}
        value={designacao}
      ></input>
      <input
        placeholder="nome do(a) principal"
        className={classes.entradas}
        onChange={(e) => setPrincipal(e.target.value)}
        value={principal}
      ></input>
      <input
        placeholder="nome do(a) ajudante"
        className={classes.entradas}
        onChange={(e) => setAjudante(e.target.value)}
        value={ajudante}
      ></input>
      <button className={classes.botao}>Adicionar Designação</button>
    </form>
  );
}

export default Adicionar;
