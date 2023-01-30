const express = require("express");
const router = express.Router();
const Designacao = require("./models/Designacao");

router.get("/", (req, res) => {
  res.status(200).send("você está acessando a API");
});

router.get("/designacao", async (req, res) => {
  const designacao = await Designacao.find();
  res.status(200).json(designacao);
});

router.post("/designacao", async (req, res) => {
  // Criando o valor enviado pelo frontend

  console.log(req.body);

  const cadaDesignacao = await Designacao.create(req.body);

  return res.status(201).json(cadaDesignacao);
});

router.delete("/designacao/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);

  const designacaoRemovida = await Designacao.findByIdAndDelete(id);
  console.log(designacaoRemovida);
  return res.status(201).json("Designação removida com sucesso!");
});

module.exports = router;
