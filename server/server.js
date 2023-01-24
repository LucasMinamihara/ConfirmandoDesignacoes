const express = require("express");
const app = express();
const path = require("path");
const { acessandoBanco } = require("./db/acessandoBanco");
const router = require("./router");
const PORT = 5000;
const cors = require("cors");

acessandoBanco();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log("Server is Running");
});
