const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Person = require("./models/Person");

function acessandoBanco() {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Banco conectado com sucesso!");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { acessandoBanco };
