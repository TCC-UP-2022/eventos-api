import express from "express";
import usuario from "../routes/usuarioRoutes.js";
import evento from "../routes/eventoRoutes.js";
import foto from "../routes/fotoRoutes.js";
import checkin from "../routes/checkinRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Eventos API");
  });
  app.use(express.json(), usuario, evento, foto, checkin);
};

export default routes;
