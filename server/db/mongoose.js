const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Person = require("./models/Modelos");

function acessandoBanco() {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Banco de dados conectado!");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { acessandoBanco };
