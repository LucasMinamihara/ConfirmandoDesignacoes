import classes from "./Header.module.css";

// pegandoSegundaFeira(semana);

function Header(props) {
  return (
    <h1 className={classes.centro}>
      Designação da semana do dia {props.pegarSegundaFeiraDaSemana().getDate()}
    </h1>
  );
}

export default Header;
