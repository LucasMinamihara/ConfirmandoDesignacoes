import { useState } from "react";
import classes from "./adicionar.module.css";
import { server } from "../lib/axios";

function Adicionar(props) {
  const [tipo, setTipo] = useState("");
  const [principal, setPrincipal] = useState("");
  const [ajudante, setAjudante] = useState("");

  async function adicionarDados(e) {
    e.preventDefault();

    if (!tipo || !principal || !ajudante) {
      alert("Alguns dados estão pendentes! ");
      return;
    }

    const dados = { tipo, principal, ajudante };

    await server.post("/designacao", dados).then((res) => {
      props.setTarefas([...props.tarefas, res.data]);
    });

    setTipo("");
    setPrincipal("");
    setAjudante("");
  }

  return (
    <form className={classes.posicao} onSubmit={adicionarDados}>
      <input
        placeholder="Tipo de Designação"
        className={classes.entradas}
        onChange={(e) => setTipo(e.target.value)}
        value={tipo}
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
