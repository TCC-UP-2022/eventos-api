import express from "express";
import eventoController from "../controllers/eventoController.js";

const router = express.Router();

router

  .get("/evento", eventoController.listarEvento)
  .post("/evento", eventoController.novoEvento)
  .get("/evento/:id", eventoController.listarEventoID)
  .get("/eventoAtivo", eventoController.listarEventoAtivo)
  .get("/eventoInativo", eventoController.listarEventoInativo)
  .put("/evento/:id", eventoController.atualizarEventoID)
  .delete("/evento/:id", eventoController.excluirEventoID);


export default router;
