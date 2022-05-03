import express from "express";
import enderecoController from "../controllers/enderecoController.js";

const router = express.Router();

router

    .post("/endereco", enderecoController.novoEndereco)
    .get("/endereco", enderecoController.listarEndereco);


export default router;
