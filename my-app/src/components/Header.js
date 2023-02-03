import classes from "./Header.module.css";

// const getMondayOfCurrentWeek = (date: Date) => {
//   const day = date.getDay() || 7; // Caso seja 0 retorna 7

//   if (day !== 1) { // Caso não seja segunda feira
//     date.setHours(-24 * (day - 1));  // Se for quinta-feira, day será igual a 5, e -24 * (day - 1) será igual a -72 (3 dias).
//   }
//   return date;
// }

const data = new Date();

function pegarSegundaFeiraDaSemana() {
  console.log(data.getDay());
  const dia = data.getDay() || 7;

  if (dia !== 1) {
    data.setHours(-24 * (dia - 1));
  }

  //  se dia for diferente de 1 (segunda-feira)
  // data.setHours(-24 * (dia -1))

  return data;
}

// pegandoSegundaFeira(semana);

function Header() {
  return (
    <h1 className={classes.centro}>
      Designação da semana do dia {pegarSegundaFeiraDaSemana().getDate()}
    </h1>
  );
}

export default Header;
