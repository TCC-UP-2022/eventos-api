import express from "express";
import usuario from "../routes/usuarioRoutes.js";
import evento from "../routes/eventoRoutes.js";
import foto from "../routes/fotoRoutes.js";
import checkin from "../routes/checkinRoutes.js";
import endereco from "../routes/enderecoRoutes.js";
import categoria from "../routes/categoriaRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Eventos API");
  });
  app.use(express.json(), usuario, evento, foto, checkin, endereco, categoria);
};

export default routes;
