import foto from "../models/Foto.js";

class fotoController {
  /**  FUNCIONALIDADE ESTA NO ROUTES/FOTOROUTES.JS
  static novaFoto = (req, res) => {
    let fotos = new foto(req.body);
    fotos.save((err, foto) => {
      err
        ? res.status(400).send({
            message: `Não foi possível cadastrar nova Foto! ${err}`,
          })
        : res.status(200).json({
            message: `Foto cadastrada com sucesso! ${err}`,
          });
    });
  };
**/
  static listarFoto = (req, res) => {
    foto.find((err, foto) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar Fotos! ${err}`,
          })
        : res.status(200).json(foto);
    });
  };

  static listarFotoID = (req, res) => {
    const id = req.params.id;
    foto.findById(id, (err, foto) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar Foto! ${err}`,
          })
        : res.status(200).json(foto);
    });
  };

  static excluirFotoID = (req, res) => {
    const id = req.params.id;
    foto.findByIdAndDelete(id, (err, foto) => {
      err
        ? res.status(400).send({
            message: `Não foi possível deletar Foto! ${err}`,
          })
        : res.status(200).json({
            message: `Foto deletada com sucesso!`,
          });
    });
  };
}

export default fotoController;
