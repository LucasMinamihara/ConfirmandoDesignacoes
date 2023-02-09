const mongoose = require("mongoose");

const designacaoSchema = {
  tipo: String,
  principal: String,
  ajudante: String,
};

const confirmadoSchema = {
  dia: Number,
  nome: String,
  confirmado: Boolean,
};

const Designacao = mongoose.model("Designacao", designacaoSchema);
const Confirmado = mongoose.model("Confirmado", confirmadoSchema);

module.exports = { Designacao, Confirmado };
