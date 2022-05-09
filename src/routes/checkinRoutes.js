import express from "express";
import checkinController from "../controllers/checkinController.js";

const router = express.Router();

router

  .get("/checkin", checkinController.listarCheckin)
  .get("/checkin/:id", checkinController.contadorCheckinEventoID)
  .post("/checkin", checkinController.novoCheckin);


export default router;
