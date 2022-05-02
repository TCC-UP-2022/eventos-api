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

  static listarFotoID = (req, res) => {
    const id = req.params.id;
    foto.findById(id, (err, foto) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id da foto não localizado.` });
      } else {
        res.status(200).send(foto);
      }
    });
  };

  static excluirFotoID = (req, res) => {
    const id = req.params.id;
    foto.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: `Foto removido com sucesso!` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao excluir foto` });
      }
    });
  };
}

export default fotoController;
