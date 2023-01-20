const express = require("express");
const app = express();
const PORT = 3001;


app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(PORT, (req, res) => {
  console.log("server is running on port " + PORT);
});
