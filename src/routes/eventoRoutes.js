import express from "express";
import eventoController from "../controllers/eventoController.js";

const router = express.Router();

router

    .get("/evento", eventoController.listarEvento)
    .post("/evento", eventoController.novoEvento)


export default router;
