import classes from "../Listagem.module.css";
import { server } from "../lib/axios";
import { useState } from "react";
import Modal from "./Modal";

function EditarDeletar(props) {
  // Editando Designação!

  const [mostrarModal, setMostrarModal] = useState(false);

  // Deletando Designação
  function deletarDados() {
    try {
      server.delete(`/designacao/${props.identificador}`).then((res) => {
        const novasTarefas = props.tarefas.filter(
          (tarefa) => tarefa._id !== props.identificador
        );
        props.setTarefas(novasTarefas);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button className={classes.deletar} onClick={deletarDados}>
        Deletar
      </button>
      <button className={classes.editar} onClick={() => setMostrarModal(true)}>
        Editar
      </button>
      {mostrarModal && (
        <Modal
          setMostrarModal={setMostrarModal}
          identificador={props.identificador}
          setTarefas={props.setTarefas}
          tarefas={props.tarefas}
        />
      )}
    </>
  );
}

export default EditarDeletar;
