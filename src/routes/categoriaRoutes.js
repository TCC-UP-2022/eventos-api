import express from "express";
import checkinController from "../controllers/categoriaController.js";
import authMiddlewares from "../middlewares/auth.js";

const router = express.Router();

//router.use(authMiddlewares);

router

  .post("/categoria", checkinController.novaCategoria)
  .get("/categoria", checkinController.listarCategoria)
  .get("/categoria/:id", checkinController.listarCategoriaID)
  .delete("/categoria/:id", checkinController.deletarCategoriaID);

export default router;
