const mongoose = require("mongoose");

const designacaoSchema = {
  tipo: String,
  principal: String,
  ajudante: String,
};

const Designacao = mongoose.model("Designacao", designacaoSchema);

module.exports = Designacao;
