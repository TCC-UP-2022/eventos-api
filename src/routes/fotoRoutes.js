import express from "express";
import fotoController from "../controllers/fotoController.js";

const router = express.Router();

router

    .get("/foto", fotoController.listarFoto)
    .post ("/foto", fotoController.novaFoto)

export default router;
