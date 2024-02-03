import { Router } from "express";
import { StatusCodes } from "http-status-codes"; // lib de status code

const router = Router();

// parametros de requisicao e resposta
router.get("/", (req, res) => {
  res.send("eai, blz?");
});

router.get("/teste/:id", (req, res) => {
  console.log(req.body); // req.body > array de items do json
  console.log(req.params.id); // parametros do endpoint

  //res.statusCode = 404;

  return res.status(StatusCodes.CREATED).json(req.body); // retorno do json
});

router.get("/mes/:mes/ano/:ano", (req, res) => {
  console.log(`Mes > ${req.params["mes"]}`);
  console.log(`Ano > ${req.params["ano"]}`);
  res.send(`Mes > ${req.params["mes"]} <br> Ano > ${req.params["ano"]}`);
});

router.post("/produto/:id", (req, res) => {
  if (parseInt(req.params["id"]) == 200) return res.send("Produto ja existe");

  return res.send(`Produto ${req.params["id"]} inserido.`);
});

export { router };
