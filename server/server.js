const express = require("express");
const app = express();
const router = require("./db/router");
const PORT = 5000;
const cors = require("cors");
const { urlencoded } = require("express");
const { acessandoBanco } = require("./db/mongoose");

acessandoBanco();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log("Server is Running");
});
