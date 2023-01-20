import { useState } from "react";
import classes from "./adicionar.module.css";

function Adicionar(props) {
  const [designacao, setDesignacao] = useState();
  const [principal, setPrincipal] = useState();
  const [ajudante, setAjudante] = useState();

  function adicionarParte(e) {
    e.preventDefault();

    props.setTarefas([
      ...props.tarefas,
      {
        id: Math.random(),
        tipo: designacao,
        nomePrincipal: principal,
        nomeAjudante: ajudante,
      },
    ]);
    console.log(props.tarefas);
  }

  return (
    <form className={classes.posicao}>
      <input
        placeholder="Tipo de Designação"
        className={classes.entradas}
        onChange={(e) => setDesignacao(e.target.value)}
      ></input>
      <input
        placeholder="nome do(a) principal"
        className={classes.entradas}
        onChange={(e) => setPrincipal(e.target.value)}
      ></input>
      <input
        placeholder="nome do(a) ajudante"
        className={classes.entradas}
        onChange={(e) => setAjudante(e.target.value)}
      ></input>
      <button className={classes.botao} onClick={adicionarParte}>
        Adicionar Designação
      </button>
    </form>
  );
}

export default Adicionar;
