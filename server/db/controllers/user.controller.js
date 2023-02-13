const { Designacao } = require("../models/Modelos");
const { Confirmado } = require("../models/Modelos");

const procurandoDesignacao = async (req, res) => {
  try {
    const designacao = await Designacao.find();
    res.status(200).json(designacao);
  } catch (error) {
    console.error(error);
  }
};

const criandoDesignacao = async (req, res) => {
  try {
    const cadaDesignacao = await Designacao.create(req.body);
    res.status(201).json(cadaDesignacao);
  } catch (error) {
    console.error(error);
  }
};

const retornandoConfirmacaoLucas = async (req, res) => {
  const dia = await Confirmado.find(req.body.dia);

  res.status(200).send(dia);
};

const confirmandoDesignacaoLucas = async (req, res) => {
  try {
    await Confirmado.create(req.body);

    res.status(201).send("Designação confirmada com sucesso!");
  } catch (err) {
    console.error(err);
  }
};

const retornoConfirmacaoErik = async (req, res) => {
  const dia = await Confirmado.find(req.body.dia);

  res.status(200).send(dia);
};

const confirmandoDesignacaoErik = async (req, res) => {
  try {
    await Confirmado.create(req.body);

    res.status(201).send("Designação confirmado com sucesso!");
  } catch (err) {
    console.error(err);
  }
};

const deletandoDesignacao = async (req, res) => {
  try {
    const { id } = req.params;

    await Designacao.findByIdAndDelete(id);

    res.status(201).json("Designação removida com sucesso!");
  } catch (error) {
    console.error(error);
  }
};

const atualizandoDesignacao = async (req, res) => {
  try {
    const { id } = req.params;

    await Designacao.findByIdAndUpdate(id, req.body);

    res.status(200).send("Dado editado com sucesso!");
  } catch (error) {
    res.send(error);
  }
};

const deletandoTudo = async (req, res) => {
  try {
    await Designacao.deleteMany();
    await Confirmado.deleteMany();
    res.status(200).send("deletando tudo com sucesso!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  procurandoDesignacao,
  criandoDesignacao,
  retornandoConfirmacaoLucas,
  confirmandoDesignacaoLucas,
  retornoConfirmacaoErik,
  confirmandoDesignacaoErik,
  deletandoDesignacao,
  atualizandoDesignacao,
  deletandoTudo,
};
