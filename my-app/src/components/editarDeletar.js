import classes from "../Listagem.module.css";
import { server } from "../lib/axios";

function EditarDeletar(props) {
  function editarDados() {}

  function deletarDados() {}

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
