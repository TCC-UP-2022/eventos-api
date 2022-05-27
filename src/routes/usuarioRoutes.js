import express from "express";
import usuarioController from "../controllers/usuarioController.js";

  // atualizar o autenticador, criar um controller a parte para auth e cadastro de novo usuario + add ID do usuario req.userId

const router = express.Router();

router

  .get("/usuario", usuarioController.listarUsuario)
  .post("/auth", usuarioController.autenticarUsuario)
  .post("/usuario", usuarioController.novoUsuario)
  .get("/usuario/:id", usuarioController.listarUsuarioID)
  .put("/usuario/:id", usuarioController.atualizarUsuarioID)
  .delete("/usuario/:id", usuarioController.excluirUsuarioID)
  .post("/esqueciSenha", usuarioController.esqueciSenha)
  .post("/resetSenha", usuarioController.resetSenha);


export default router;
