"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes"); // lib de status code
const router = (0, express_1.Router)();
exports.router = router;
// parametros de requisicao e resposta
router.get("/", (req, res) => {
    res.send("eai, blz?");
});
router.get("/teste/:id", (req, res) => {
    console.log(req.body); // req.body > array de items do json
    console.log(req.params.id); // parametros do endpoint
    //res.statusCode = 404;
    return res.status(http_status_codes_1.StatusCodes.CREATED).json(req.body); // retorno do json
});
router.get("/mes/:mes/ano/:ano", (req, res) => {
    console.log(`Mes > ${req.params["mes"]}`);
    console.log(`Ano > ${req.params["ano"]}`);
    res.send(`Mes > ${req.params["mes"]} <br> Ano > ${req.params["ano"]}`);
});
router.post("/produto/:id", (req, res) => {
    if (parseInt(req.params["id"]) == 200)
        return res.send("Produto ja existe");
    return res.send(`Produto ${req.params["id"]} inserido.`);
});
