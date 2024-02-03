import express from "express";
import { router } from "./routes";

const server = express();

// pega as rotas criadas e seta ela diretamente no servidor
server.use(express.json()) // - indica que pode pegar o body da requisicao
                           // deve vir acima do router
server.use(router);

export { server };
