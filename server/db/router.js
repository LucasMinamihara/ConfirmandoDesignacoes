const express = require("express");
const router = express.Router();
const Designacao = require("./models/Designacao");

router.get("/", (req, res) => {
  try {
    res.status(200).send("você está acessando a API");
  } catch (error) {
    console.error(error);
  }
});

router.get("/designacao", async (req, res) => {
  try {
    const designacao = await Designacao.find();
    res.status(200).json(designacao);
  } catch (error) {
    console.error(error);
  }
});

router.post("/designacao", async (req, res) => {
  // Criando o valor enviado pelo frontend

  try {
    const cadaDesignacao = await Designacao.create(req.body);
    res.status(201).json(cadaDesignacao);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/designacao/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Designacao.findByIdAndDelete(id);

    res.status(201).json("Designação removida com sucesso!");
  } catch (error) {
    console.error(error);
  }
});

router.put("/designacao/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Designacao.findByIdAndUpdate(id, req.body);

    res.status(200).send("Dado editado com sucesso!");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
