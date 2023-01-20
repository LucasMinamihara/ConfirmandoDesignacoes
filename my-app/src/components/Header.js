import classes from "./Header.module.css";

let data = new Date();
let dia = data.getDate();

function Header() {
  return <h1 className={classes.centro}>Designação da semana do dia {dia}</h1>;
}

export default Header;
