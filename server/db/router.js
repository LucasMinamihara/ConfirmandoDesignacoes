const express = require("express");
const router = express.Router();
const Person = require("./models/Person");

router.get("/designacao", async (req, res) => {
  const person = await Person.find();
  res.status(200).json(person);
});

router.post("/designacao", async (req, res) => {
  // Pegando dados do front end sem o ID
  const novaDesignacao = await req.body;

  // Criando designação no banco de dados
  // pegando a designação com o id e atribuindo o valor em uma variável
  const veiocomID = await Person.create(novaDesignacao);
  console.log(veiocomID);
});

router.delete("/designacao/:id", async (req, res) => {
  res.send({ message: "rota delete acessado com sucesso!" });
});

module.exports = router;
