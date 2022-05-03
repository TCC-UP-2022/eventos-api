import express from "express";
import checkinController from "../controllers/categoriaController.js";

const router = express.Router();

router

  .post("/categoria", checkinController.novaCategoria)
  .get("/categoria", checkinController.listarCategoria)
  .get("/categoria/:id", checkinController.listarCategoriaID)
  .delete("/categoria/:id", checkinController.deletarCategoriaID);

export default router;
