import express from "express";
import fotoController from "../controllers/fotoController.js";
import multer from "multer";
import multerConfig from "../config/multer.js";
import foto from "../models/Foto.js";

const router = express.Router();

router

  .get("/foto", fotoController.listarFoto)
  .get("/foto/:id", fotoController.listarFotoID)
  .delete("/foto/:id", fotoController.excluirFotoID);

router.post("/foto", multer(multerConfig).single("file"), async (req, res) => {
const post = await foto.create({
  nome: req.body.nome,
  evento: req.body.evento,
  foto: req.body.path,
  banner: req.body.banner,
});
  return res.json({ message: `Foto ${post.id} cadastrada com sucesso!` });
}); 

export default router;
