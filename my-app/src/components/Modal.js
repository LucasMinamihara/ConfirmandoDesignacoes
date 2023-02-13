import { useEffect, useState } from "react";
import { server } from "../lib/axios";
import classes from "./Modal.module.css";

function Modal(props) {
  const [tipo, setTipo] = useState("");
  const [principal, setPrincipal] = useState("");
  const [ajudante, setAjudante] = useState("");

  useEffect(() => {
    const tarefaAtual = props.tarefas.find(
      (tarefa) => tarefa._id === props.identificador
    );

    setTipo(tarefaAtual.tipo);
    setPrincipal(tarefaAtual.principal);
    setAjudante(tarefaAtual.ajudante);
  }, [props.identificador, props.tarefas]);

  function aoClicar() {
    props.setMostrarModal(false);
  }

  function editar(e) {
    e.preventDefault();

    props.setTarefas((tarefas) => {
      const novasTarefas = tarefas.map((tarefa) => {
        if (tarefa._id === props.identificador) {
          return { tipo, principal, ajudante, _id: tarefa._id };
        }
        return tarefa;
      });

      return novasTarefas;
    });
    try {
      server
        .put(`/designacao/${props.identificador}`, {
          tipo,
          principal,
          ajudante,
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }

    props.setMostrarModal(false);
  }

  return (
    <div className={classes.container} onClick={aoClicar}>
      <form
        className={classes.modal}
        onClick={(e) => e.stopPropagation()}
        onSubmit={editar}
      >
        <input
          placeholder="Tipo Designação"
          className={classes.input}
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <input
          placeholder="Nome Principal"
          className={classes.input}
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <input
          placeholder="Nome Ajudante"
          className={classes.input}
          value={ajudante}
          onChange={(e) => setAjudante(e.target.value)}
        />
        <button className={classes.button}>Alterar!</button>
      </form>
    </div>
  );
}

export default Modal;
