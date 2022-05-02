import express from "express";
import checkinController from "../controllers/checkinController.js";

const router = express.Router();

router

  .get("/checkin", checkinController.listarCheckin)
  .post("/checkin", checkinController.novoCheckin);


export default router;
