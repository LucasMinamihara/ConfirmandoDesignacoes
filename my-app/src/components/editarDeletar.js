import classes from "../Listagem.module.css";
import { server } from "../lib/axios";

function EditarDeletar(props) {
  // Editando Designação!

  function editarDados() {
    console.log(
      "estou editando a designação que possui o seguinte identificador " +
        props.identificador
    );
  }

  // Deletando Designação
  function deletarDados() {
    server.delete(`/designacao/${props.identificador}`).then((res) => {
      console.log(
        `Designação com o id ${props.identificador} removido com sucesso!`
      );

      return props.setTarefas([...props.tarefas, props.tarefas]);
    });
  }

  return (
    <>
      <button className={classes.deletar} onClick={deletarDados}>
        Deletar
      </button>
      <button className={classes.editar} onClick={editarDados}>
        Editar
      </button>
    </>
  );
}

export default EditarDeletar;
