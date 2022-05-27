import express from "express";
import enderecoController from "../controllers/enderecoController.js";
import authMiddlewares from "../middlewares/auth.js";

const router = express.Router();

//router.use(authMiddlewares);

router

  .post("/endereco", enderecoController.novoEndereco)
  .get("/endereco", enderecoController.listarEndereco)
  .delete("/endereco/:id", enderecoController.deletarEnderecoID);

export default router;
