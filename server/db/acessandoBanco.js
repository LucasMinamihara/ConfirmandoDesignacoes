const mongoose = require("mongoose");

const designacaoSchema = {
  id: Number,
  tipo: String,
  principal: String,
  ajudante: String,
};

const Designacao = mongoose.model("Designacao", designacaoSchema);

function acessandoBanco() {
  mongoose
    .connect(
      "mongodb+srv://ConfirmandoDesignacao:12345@cluster0.0b8ot7r.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Banco conectado com sucesso!");
    })
    .catch((err) => {
      console.log(err);
    });
}

function salvarDesignacao(tipo, principal, ajudante) {
  var designacao1 = new Designacao({
    tipo,
    principal,
    ajudante,
  });
  designacao1.save(function (err) {
    if (err) return console.error(err);
  });
}

async function pegarInformacoes() {
  try {
    const salvo_BancoDeDados = await Designacao.find();
    return salvo_BancoDeDados;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { acessandoBanco, salvarDesignacao, pegarInformacoes };
