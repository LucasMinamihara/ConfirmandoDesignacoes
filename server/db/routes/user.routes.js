const express = require("express");

const {
  procurandoDesignacao,
  criandoDesignacao,
  retornandoConfirmacaoLucas,
  confirmandoDesignacaoLucas,
  retornoConfirmacaoErik,
  confirmandoDesignacaoErik,
  deletandoDesignacao,
  atualizandoDesignacao,
  deletandoTudo,
} = require("../controllers/user.controller");

const router = express.Router();

const { Designacao } = require("../models/Modelos");
const { Confirmado } = require("../models/Modelos");

router.get("/designacao", procurandoDesignacao);

router.post("/designacao", criandoDesignacao);

router.get("/confirmadoLucas", retornandoConfirmacaoLucas);

router.post("/confirmadoLucas", confirmandoDesignacaoLucas);

router.get("/confirmadoErik", retornoConfirmacaoErik);

router.post("/confirmadoErik", confirmandoDesignacaoErik);

router.delete("/designacao/:id", deletandoDesignacao);

router.put("/designacao/:id", atualizandoDesignacao);

router.delete("/deletandoTudo", deletandoTudo);

module.exports = router;
