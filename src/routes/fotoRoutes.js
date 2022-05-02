import express from "express";
import fotoController from "../controllers/fotoController.js";

const router = express.Router();

router

  .get("/foto", fotoController.listarFoto)
  .post("/foto", fotoController.novaFoto)
  .get("/foto/:id", fotoController.listarFotoID)
  .delete("/foto/:id", fotoController.excluirFotoID);

export default router;
