import foto from "../models/Foto.js";

class fotoController {


  static novaFoto = (req, res) => {
    let fotos = new foto(req.body);
    fotos.save((err, foto) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(201).send(foto);
      }
    });
  };

  static listarFoto = (req, res) => {
    foto.find((err, foto) => {
      err ? res.status(400).send(err) : res.status(200).json(foto);
    });
  };
}

export default fotoController;
