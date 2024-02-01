import express from "express";

const server = express();

// parametros de requisicao e resposta
server.get("/", (req, res) => {
  res.send("eai, blz?");
});

export { server };
