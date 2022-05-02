import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router

  .get("/usuario", usuarioController.listarUsuario)
  .post("/usuario", usuarioController.novoUsuario)
  .get("/usuario/:id", usuarioController.listarUsuarioID)
  .put("/usuario/:id", usuarioController.atualizarUsuarioID)
  .delete("/usuario/:id", usuarioController.excluirUsuarioID);


export default router;
