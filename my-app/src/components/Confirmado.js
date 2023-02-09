import { useEffect, useState } from "react";
import classes from "./Confirmado.module.css";
import { server } from "../lib/axios";

function Confirmado(props) {
  const [confirmadoErik, setConfirmadoErik] = useState(false);
  const [confirmadoLucas, setConfirmadoLucas] = useState(false);

  const [jaConfirmadoLucas, setJaConfirmadoLucas] = useState(false);
  const [jaConfirmadoErik, setJaConfirmadoErik] = useState(false);

  useEffect(() => {
    server
      .get("/confirmadoLucas", props.pegarSegundaFeiraDaSemana().getDate())
      .then((res) => {
        const dados = res.data;

        dados.filter((cadaConfirmacao) => {
          if (
            cadaConfirmacao.nome === "Lucas" &&
            cadaConfirmacao.confirmado === true
          ) {
            setJaConfirmadoLucas(true);
            console.log("Lucas já foi confirmado!");
          }
        });
      });

    server
      .get("/confirmadoErik", props.pegarSegundaFeiraDaSemana().getDate())
      .then((res) => {
        const dados = res.data;

        dados.filter((cadaConfirmacao) => {
          if (
            cadaConfirmacao.nome === "Erik" &&
            cadaConfirmacao.confirmado === true
          ) {
            setJaConfirmadoErik(true);
            console.log("Erik Já foi confirmado!");
          }
        });
      });
  }, []);

  function ativandoConfirmacaoErik() {
    setConfirmadoErik(true);

    const infConfirmado = {
      confirmado: true,
      dia: props.pegarSegundaFeiraDaSemana().getDate(),
      nome: "Erik",
    };

    try {
      server.post("/confirmadoErik", infConfirmado).then((res) => {
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }

  function ativandoConfirmacaoLucas() {
    setConfirmadoLucas(true);

    const infConfirmado = {
      confirmado: true,
      dia: props.pegarSegundaFeiraDaSemana().getDate(),
      nome: "Lucas",
    };

    try {
      server.post("/confirmadoLucas", infConfirmado).then((res) => {
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className={classes.containerConfirmado}>
      {jaConfirmadoLucas ? (
        <div className={classes.nomesConfirmado}>
          Confirmado - Lucas Minamihara 💚
        </div>
      ) : confirmadoLucas ? (
        <div className={classes.nomesConfirmado}>
          Confirmado - Lucas Minamihara 💚
        </div>
      ) : (
        <button
          className={classes.confirmado}
          onClick={ativandoConfirmacaoLucas}
        >
          Confirmar - Lucas
        </button>
      )}

      {jaConfirmadoErik ? (
        <div className={classes.nomesConfirmado}>
          Confirmado - Erik Nascimento 💚
        </div>
      ) : confirmadoErik ? (
        <div className={classes.nomesConfirmado}>
          Confirmado - Erik Nascimento 💚
        </div>
      ) : (
        <button
          className={classes.confirmado}
          onClick={ativandoConfirmacaoErik}
        >
          Confirmar - Erik
        </button>
      )}
    </div>
  );
}

export default Confirmado;
