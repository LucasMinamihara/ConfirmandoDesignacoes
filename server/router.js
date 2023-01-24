const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const { salvarDesignacao, pegarInformacoes } = require("./db/acessandoBanco");

router.get("/designacao", async (req, res) => {
  const dadosRetornados = await pegarInformacoes();
  res.status(200).send(dadosRetornados);
});

router.post("/designacao", async (req, res) => {
  const { id, designacao, principal, ajudante } = req.body;

  if ( designacao && principal && ajudante) {
    salvarDesignacao( designacao, principal, ajudante);
  }
});

module.exports = router;
