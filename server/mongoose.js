const mongoose = require("mongoose");

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

  const designacaoSchema = {
    tipo: String,
    principal: String,
    ajudante: String,
  };

  const Designacao = mongoose.model("Designacao", designacaoSchema);
}
